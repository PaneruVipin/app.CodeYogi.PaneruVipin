import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import { FormCard } from './InputCard';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {string, object} from 'yup';
import axios from 'axios';
import { GoFileSymlinkDirectory } from 'react-icons/go';
import { setUpForm,validationForm,Form} from './Form';
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
	const { formData, handleChange } = setUpForm({
    Submission:''
  })
 
  const [toggleSubmitPopUp, setToggleSubmitPopUp] =React.useState(false);
	const onSubmit = () => {
    
     
	};
  const CancelClick=()=>{
    setToggleSubmitPopUp(!toggleSubmitPopUp);     
    }
  const {blur, error} = validationForm(
   object().shape(
     {Submission:string().url()}
   ) ,
    formData
  )

 console.log('what is error', error, blur, formData.Submission)
  
	return (
		<div className="border border-gray-200 bg-white rounded-lg shadow-lg pt-2 pl-3 pr-4 ">
      {toggleSubmitPopUp &&
					<div className="fixed bg-gray-500 bg-opacity-50 inset-x-0 inset-y-0 flex justify-center items-center px-4 ">
						<div className="bg-white max-w-7xl px-4 grow  max-w-4xl ">
							<Form onSubmit={ onSubmit } className="pl-6 py-6 bg-red-500 border-b border-gray-200" >
							<FormCard
                name='Submission'
                error={error} value={formData.Submission} onChange={handleChange} onBlur={blur}>
								Submission Link
							</FormCard>
							<div className="pl-1 pt-5 pb-8 flex space-x-6">
								<Button type='submit' >Update</Button>
                <Button type='button' secondry onClick={CancelClick}>Back</Button>
							</div>
                </Form>
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
				{data.submission &&
          <a
						className="flex justify-center gap-x-2 items-center w-full py-4 text-lg grow border-l-2 border-gray-100 text-center text-indigo-500 "
						href={data.submission}
						target="blank"
					>
            <GoFileSymlinkDirectory/>
						see your submission
					</a>
				}
			</div>
		</div>
	);
}
export default Assignment;
