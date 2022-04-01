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
  
  const saveTitleList = JSON.parse(localStorage.getItem('titleList')) || ['Practice responsive design'];
  const saveDateList = JSON.parse(localStorage.getItem('dateList')) || ['Tue Mar 22 2022'];
  const saveDueDateList = JSON.parse(localStorage.getItem('dueDateList')) || ['Fri Jan 21 2022'];
  const [titleList, setTitleList]=React.useState(saveTitleList)
  const [dateList, setDateList]=React.useState(saveDateList)
  const [dueDateList, setDueDateList]=React.useState(saveDueDateList)
  
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
     if(passwordValue==='a'){
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
localStorage.setItem('titleList',JSON.stringify([...titleList,titleValue]));  localStorage.setItem('dueDateList',JSON.stringify([...dueDateList,dueDateValue]));  localStorage.setItem('dateList',JSON.stringify([...dateList,dateValue]));
  }
  const saveLink=localStorage.getItem('link'+ localStorage.getItem('i')) || '';
    const [linkList, setLinkList]=React.useState(saveLink)
  
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
      <div className='mx-auto max-w-4xl  py-6 pt-4 px-4 pb-8 flex flex-col-reverse' >
        {getObject(dateList, dueDateList, titleList,setLinkList)}
        </div>
    </div>
  </div>
  );
}
function getObject(dateList, dueDateList, titleList,setLinkList){
const HTML=[];
  for (let i = 0; i < dateList.length; i++) {
  const update=(submitValue)=>{
    setLinkList(submitValue)
    localStorage.setItem('link'+i,submitValue )
  }
    localStorage.setItem('i',i)
    const id='#'+(i+1);
   const title=titleList[i];
   const date=dateList[i];
   const dueDate=dueDateList[i];
    const html=
    <Assignment update={update} link={localStorage.getItem('link'+i) || ''} to={'/assignment/'+(i+1)+'/details'}  id={id} key={id} title={title} date={date} dueDate={dueDate}></Assignment>;
    HTML.push(html)
  }
  return HTML; 
}
export default AssignmentPage;



 /*localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");*/