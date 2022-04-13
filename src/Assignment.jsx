import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import { Link } from 'react-router-dom';
import FormCard from './FormCard';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {string} from 'yup';
import axios from 'axios';
function Assignment({ data }) {
  let status= 'Not Submitted';
  let theme='text-red-500';
  let buttonHTML='Submit';
  if(data.submission){
     status= 'Submitted';
  theme='text-green-500';
 buttonHTML='Re-Submit';
  }
	const navigate = useNavigate();
	const [submissionLink, setSubmissionLink] = React.useState('');
  const [urlError,setUrlError] =React.useState('')
  const [toggleSubmitPopUp, setToggleSubmitPopUp] = React.useState(false);
	const submitAssignment = () => {
  const urlValidator=string().url();
    const urlValid=urlValidator.isValidSync(submissionLink, {strict:true})
     const urlError =urlValid ? '' : 'Please enter the valid url/link';
     setUrlError(urlError);
    if(!submissionLink){
      return;
    }else if(urlValid){
      axios.put( `https://api.codeyogi.io/${data.id}/submit`,
			{ submissionLink }, { withCredentials: true }  );
      setToggleSubmitPopUp(!toggleSubmitPopUp)
    }
	};
	return (
		<div className="border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4 ">
      {toggleSubmitPopUp &&
					<div className="fixed bg-gray-500 bg-opacity-50 inset-x-0 inset-y-0 flex justify-center items-center px-4 ">
						<div className="bg-white max-w-7xl px-4 grow  max-w-4xl ">
							<div className="pl-6 py-6  border-b border-gray-200" />
							<FormCard error={urlError} value={submissionLink} onChange={()=>setSubmissionLink(event.target.value)}>
								Submission Link
							</FormCard>
							<div className="pl-1 pt-5 pb-8 flex space-x-6">
								<Button onClick={submitAssignment}>Update</Button>
                <Button secondry onClick={()=>setToggleSubmitPopUp(!toggleSubmitPopUp)}>Cancel</Button>
							</div>
							<div/>
						</div>
					</div>
      }
			<div
				onClick={()=>navigate(`/assignment/${data.id}/details`)}
				className="md:flex md:flex-row  justify-between items-center  "
			>
				<div className="bg-white">
					<div className="flex space-x-6 text-lg">
						<div className="flex space-x-2">
							<span>#{data.id}</span>
							<h3>{data.title}</h3>
						</div>
						<span className="text-gray-400">({data.created_at})</span>
					</div>
					<h3 className="mt-2  text-red-500  text-lg">
						Due Date: {data.due_date}
					</h3>
				</div>

				<div className={'text-lg mt-4 '+ theme }>{status}</div>
			</div>

			<div className="flex mt-3  text-green-500">
				<Button grow onClick={()=>setToggleSubmitPopUp(!toggleSubmitPopUp)}>
					<AiOutlineCheckCircle />
					<span className="ml-2">{buttonHTML}</span>
				</Button>
				{data.submission && <a
						className=" w-full py-4 text-lg grow border-l-2 border-gray-200 text-center text-indigo-500 "
						href={data.submission}
						target="blank"
					>
						see your submission
					</a>
				}
			</div>
		</div>
	);
}
export default Assignment;
