import axios from 'axios';
const base_codyogi_api='https://api.codeyogi.io/';
const base_randomUser_api= 'https://randomuser.me/api/';

export const getAssignments =()=> {
  const responsePromise = axios.get(base_codyogi_api+'batches/1/assignments', {
			withCredentials: true
		});
  return responsePromise;
}

export const getLectures =()=> {
  const responsePromise = axios.get(base_codyogi_api+'batches/1/sessions', {
			withCredentials: true
		});
  return responsePromise;
}

export const getAssignmentDetails =(assignmentId)=> {
  const responsePromise = axios.get(base_codyogi_api+'assignments/'+assignmentId , {
			withCredentials: true
		});
  return responsePromise;
}
export const getStudents =()=> {
  const responsePromise = axios.get(base_randomUser_api+'?results=5');
  return responsePromise;
}