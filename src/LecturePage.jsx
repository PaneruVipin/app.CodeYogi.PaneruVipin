import React from 'react';
import H1 from './H1';
import Lecture from './Lecture';
import Button from './Button';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
import axios from 'axios';
import { DateTime } from 'luxon';
import { getLectures } from './Api';
import { saveData } from './SaveData';
import { useSaveData } from './SaveData';
function LecturePage() {
	const [lectures, setLectures] = React.useState([]);
	const saveCleanedLectures = useSaveData('cleanedLectures') || [];
	const [cleanedLectures, setCleanedLectures] = React.useState(
		saveCleanedLectures
	);
	React.useEffect(() => {
		const token = getLectures();
		token.then(response => {
			setLectures(response.data);
			const filteredLecteres = response.data.map(l => {
				const newList = {
					id: l.id - 2,
					created_at: DateTime.fromISO(l.created_at).toFormat(
						'ccc dd LLL yyyy'
					),
					topic: l.topic,
					recording_url: l.recording_url,
					duration: DateTime.fromISO(l.end_time).diff(
						DateTime.fromISO(l.start_time),
						['hours', 'minutes', 'seconds']
					).values
				};
				return newList;
			});
			setCleanedLectures(filteredLecteres);
			saveData('cleanedLectures', filteredLecteres);
		});
	}, []);
	return (
		<div className="space-y-5">
			<H1 secondry>Session List</H1>
			<div className="bg-gray-50 max-w-7xl  ">
				<div className="mx-auto max-w-4xl  px-4  py-6 pt-4 pb-8 space-y-6">
					{cleanedLectures.map(l => <Lecture data={l} key={l.id} />)}
				</div>
			</div>
		</div>
	);
}
export default LecturePage;
