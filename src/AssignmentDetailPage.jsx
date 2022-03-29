import React from 'react';
import H1 from './H1';
import AssignmentDetailRow from './AssignmentDetailRow';
import Button from './Button';
import AssignmentDetailsAdminPage from './AssignmentDetailsAdminPage';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
function AssignmentDetailPage(props){
     const [discriptionValue, setDiscriptionValue]=React.useState('')
  const [dueDateValue, setDueDateValue]=React.useState('')
  const [titleValue, setTitleValue]=React.useState('')
  
  const [titleList, setTitleList]=React.useState('')
  const [discriptionList, setDiscriptionList]=React.useState('')
  const [dueDateList, setDueDateList]=React.useState('')
  
  const discriptionChange=(event)=>setDiscriptionValue(event.target.value);
  const dueDateChange=(event)=>setDueDateValue(event.target.value);
  const titleChange=(event)=>setTitleValue(event.target.value);
  
  const [addAssignment, setAddAssignment]=React.useState(true)
  const [showPassword, setShowPassword]=React.useState(false)
  const [passwordValue, setPasswordValue]=React.useState('')
  const [showAdminForm, setShowAdminForm] = React.useState(false);
  const password=()=>{
    setShowPassword(!showPassword);
    setAddAssignment(!addAssignment);
       }
  const passwordChange=(event)=>{
      setPasswordValue(event.target.value);
      }
   const checkPassword=()=>{
      setPasswordValue('');
     if(passwordValue==='codyogi@324'){
    setShowPassword(!showPassword);
       setShowAdminForm(!showAdminForm)
       }
     }
   const uploadClick=()=>{
     if(discriptionValue==='' || dueDateValue==='' || titleValue==='' ||discriptionValue===undefined || dueDateValue===undefined || titleValue===undefined)       {
       return;
        }
         setDiscriptionValue(discriptionValue)
    setDueDateList(dueDateValue)
    setTitleList(titleValue)
     setShowAdminForm(!showAdminForm);
     setAddAssignment(!addAssignment);
  }
  return(
    <div className='bg-white max-w-7xl px-4 py-2'>
       <div className='   space-y-2'>
        {addAssignment && <Button onClick={password}>+ Add Assignment Details</Button>}
        {showPassword && <div className='flex  items-center'>
          <FormCard placeholder='Admin Password' value={passwordValue} onChange={passwordChange} password>Admin Password</FormCard>
        <FiLogIn onClick={checkPassword} className='w-8 h-8 mt-7 md:mt-0'/>
          </div>}
      </div>
    {showAdminForm && <div className='bg-gray-500 md:fixed inset-0 md:px-60 md:pt-10 bg-opacity-50'><AssignmentDetailsAdminPage dueDateChange={dueDateChange} discriptionChange={discriptionChange} titleChange={titleChange} discriptionValue={discriptionValue} dueDateValue={dueDateValue} titleValue={titleValue} uploadClick={uploadClick}/> </div>}
      <div className='pl-6 py-6 border-b border-gray-200'>
    <H1 secondry>Assignment Details</H1>
      </div>
       <AssignmentDetailRow about={titleList}>Name</AssignmentDetailRow>
      <AssignmentDetailRow about={dueDateList}>Due Date</AssignmentDetailRow>
      <AssignmentDetailRow about={discriptionList}>Description</AssignmentDetailRow>
    </div>
  );
}
export default AssignmentDetailPage;


/*git remote add origin https://github.com/PaneruVipin/app.CodeYogi.PaneruVipin.git
git branch -M main
git push -u origin main*/