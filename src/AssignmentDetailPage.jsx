import React from 'react';
import H1 from './H1';
import AssignmentDetailRow from './AssignmentDetailRow';
import Button from './Button';
import { FiLogIn } from 'react-icons/fi';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DateTime } from 'luxon';
import { getAssignmentDetails } from './Api';
import { useSaveData, saveData } from './Storage';
function AssignmentDetailPage() {
	const data = useParams();
	const saveDetails = useSaveData('details' + data.id) || {};
	const [details, setDetails] = React.useState(saveDetails);
	React.useEffect(() => {
		const token = getAssignmentDetails(data.id);
		token.then(response => {
			const filteredDetails = {
				title: response.data.title,
				description: response.data.description,
				due_date: DateTime.fromISO(response.data.due_date).toFormat(
					'ccc dd LLL yyyy'
				)
			};
			setDetails(filteredDetails);
			saveData('details' + data.id, filteredDetails);
		}),
			[];
	});
	return (
		<div className="bg-white max-w-7xl px-4 py-2">
			<div className="pl-6 py-6 border-b border-gray-200">
				<H1 secondry>Assignment Details</H1>
			</div>
			<AssignmentDetailRow about={details.title}>Name</AssignmentDetailRow>
			<AssignmentDetailRow about={details.due_date}>
				Due Date
			</AssignmentDetailRow>
			<AssignmentDetailRow
				about={<MDEditor.Markdown source={details.description} />}
			>
				Description
			</AssignmentDetailRow>
		</div>
	);
}
export default AssignmentDetailPage;
