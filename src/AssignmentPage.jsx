import React from 'react';
import H1 from './H1';
import Assignment from './Assignment';
import FormCard from './FormCard';
import Button from './Button';
import AssignmentAdminPage from './AssignmentAdminPage';
import { FiLogIn } from 'react-icons/fi';
function AssignmentPage(){
   const [dateValue, setDateValue]=React.useState('')
  const [dueDateValue, setDueDateValue]=React.useState('')
  const [titleValue, setTitleValue]=React.useState('')
  
  const [titleList, setTitleList]=React.useState(['Practice responsive design'])
  const [dateList, setDateList]=React.useState(['Tue Mar 22 2022'])
  const [dueDateList, setDueDateList]=React.useState(['Fri Jan 21 2022'])
  
  const dateChange=(event)=>setDateValue(event.target.value);
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
     if(dateValue==='' || dueDateValue==='' || titleValue==='' ||dateValue===undefined || dueDateValue===undefined || titleValue===undefined)       {
       return;
        }
         setDateList([...dateList,dateValue])
    setDueDateList([...dueDateList,dueDateValue])
    setTitleList([...titleList,titleValue])
     setShowAdminForm(!showAdminForm);
     setAddAssignment(!addAssignment);
  }
  const [inputValue, setInputValue]=React.useState('')
  const [buttonClick, setButtonClick]=React.useState(false)
  const [linkList, setlinkList]=React.useState([])
  const inputChange=(event)=>{
    setInputValue(event.target.value);
  }
  const submitClick=()=>{
    setButtonClick(!buttonClick);
  }
  const updateClick=()=>{
    setButtonClick(!buttonClick);
    setlinkList([inputValue]);
  }
  return(
  <div className='space-y-5'>
    <div className='   space-y-2'>
        {addAssignment && <Button onClick={password}>+ Add New Assignment</Button>}
        {showPassword && <div className='flex  items-center'>
          <FormCard placeholder='Admin Password' value={passwordValue} onChange={passwordChange} password>Admin Password</FormCard>
        <FiLogIn onClick={checkPassword} className='w-8 h-8 mt-7 md:mt-0'/>
          </div>}
      </div>
    {showAdminForm && <div className='bg-gray-500 md:fixed inset-0 md:px-60 md:pt-10 bg-opacity-50'><AssignmentAdminPage dueDateChange={dueDateChange} dateChange={dateChange} titleChange={titleChange} dateValue={dateValue} dueDateValue={dueDateValue} titleValue={titleValue} uploadClick={uploadClick}/> </div>}
    <H1 secondry>Assignment List</H1>
    <div className='bg-gray-50 max-w-7xl '>
      <div className='mx-auto max-w-4xl space-y-6 py-6 sm:pt-4 sm:pb-8' >
        {getObject(dateList, dueDateList, titleList,inputValue,inputChange,submitClick,buttonClick,updateClick,linkList)}
        </div>
    </div>
  </div>
  );
}
function getObject(dateList, dueDateList, titleList,inputValue,inputChange,submitClick,buttonClick,updateClick,linkList){
const HTML=[];
  const link=linkList[0];
  console.log(link)
  const  aTag= <a className=' w-full py-4 text-lg grow border-l-2 border-gray-200 text-center text-indigo-500 ' href={link}  target='blank'>see your submission</a>;
  for (let i = 0; i < dateList.length; i++) {
   
    const id='#'+(i+1);
   const title=titleList[i];
   const date=dateList[i];
   const letNote=[i];
   const dueDate=dueDateList[i];
    const html=
    <Assignment aTag={link  &&  aTag} secondry={link  && true} updateClick={updateClick} buttonClick={buttonClick} onClick={submitClick} submitChange={inputChange} submitValue={inputValue} id={id} key={id} title={title} date={date} dueDate={dueDate}></Assignment>;
    HTML.push(html)
  }
    
  return HTML;
}
export default AssignmentPage;