import React from 'react';
import H1 from './H1';
import Assignment from './Assignment';
import { DateTime } from 'luxon';
import { getAssignments } from './Api';
import { saveData } from './SaveData';
import { useSaveData } from './SaveData';
function AssignmentPage() {
	const [assignments, setAssignments] = React.useState([]);
	const saveCleanedAssignments = useSaveData('cleanedAssignment') || [];
	const [cleanedAssignments, setCleanedAssignments] = React.useState(
		saveCleanedAssignments
	);
	React.useEffect(() => {
		const token = getAssignments();
		token.then(response => {
			setAssignments(response.data);
			const filteredAssignment = response.data.map(a => {
				const newList = {
					id: a.id,
					created_at: DateTime.fromISO(a.created_at).toFormat(
						'ccc dd LLL yyyy'
					),
					title: a.title,
					due_date: DateTime.fromISO(a.due_date).toFormat('ccc dd LLL yyyy'),
					description: a.description,
					submission: a.submissions[0].submission_link
				};
				return newList;
			});
			setCleanedAssignments(filteredAssignment);
			saveData('cleanedAssignment', filteredAssignment);
		});
	}, []);
	return (
		<div className="space-y-5">
			<H1 secondry>Assignment List</H1>
			<div className="bg-gray-50 max-w-7xl ">
				<div className="mx-auto max-w-4xl  py-6 pt-4 px-4 pb-8 space-y-6">
					{cleanedAssignments.map(a => <Assignment data={a} key={a.id} />)}
				</div>
			</div>
		</div>
	);
}
export default AssignmentPage;
