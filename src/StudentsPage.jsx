import React from 'react';
import StudentCard from './StudentCard';
import H1 from './H1';
import axios from 'axios';
import { getStudents } from './Api';
import { saveData } from './SaveData';
import { useSaveData } from './SaveData';
function StudentsPage() {
	const saveStudentList = useSaveData('studentList') || [];
	const [students, setStudents] = React.useState(saveStudentList);
	React.useEffect(() => {
		const token = getStudents();
		token.then(response => {
			setStudents(response.data.results);
			saveData('studentList', response.data.results);
		});
	}, []);
	return (
		<div className="space-y-4">
			<H1 secondry>Students List</H1>
			<div className="bg-white max-w-7xl">
				<div className="flex flex-wrap max-w-6xl justify-between mx-auto px-4 py-8 gap-y-20">
					{students.map(s => (
						<StudentCard key={s.email + s.name} students={s} />
					))}
					<span className="w-80" />
					<span className="w-80" />
				</div>
			</div>
		</div>
	);
}
export default StudentsPage;
