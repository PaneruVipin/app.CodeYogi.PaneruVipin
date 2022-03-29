import React from 'react';
import H1 from './H1';
import Lecture from './Lecture';
import Button from './Button';
import LectureAdminPage from './LectureAdminPage';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
function LecturePage(){
  const [dateValue, setDateValue]=React.useState('')
  const [durationValue, setDurationValue]=React.useState('')
  const [discriptionValue, setDiscriptionValue]=React.useState('')
  const [topiksValue, setTopiksValue]=React.useState('')
  const [linkValue, setLinkValue]=React.useState('')
  
  const [linkList, setLinkList]=React.useState(['https://google.com'])
  const [dateList, setDateList]=React.useState(['Tue Mar 22 2022'])
  const [durationList, setDurationList]=React.useState(['03:35:42'])
  const [discriptionList, setDiscriptionList]=React.useState(['इस लेक्चर को देखने के बाद Assignment 35 करें।'])
  const [topiksList, setTopiksList]=React.useState([['डेढ़ घंटे का भाषण 😲']])
  
  const dateChange=(event)=>setDateValue(event.target.value);
  const discriptionChange=(event)=>setDiscriptionValue(event.target.value);
  const durationChange=(event)=>setDurationValue(event.target.value);
  const topiksChange=(event)=>setTopiksValue(event.target.value.split(','));
  const linkChange=(event)=>setLinkValue(event.target.value);
  
  const [addLecture, setAddLecture]=React.useState(true)
  const [showPassword, setShowPassword]=React.useState(false)
  const [passwordValue, setPasswordValue]=React.useState('')
  const [showAdminForm, setShowAdminForm] = React.useState(false);
  const password=()=>{
    setShowPassword(!showPassword);
    setAddLecture(!addLecture);
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
     if(dateValue==='' || durationValue==='' || linkValue==='' ||dateValue===undefined || durationValue===undefined || linkValue===undefined)       {
       return;
        }
         setDateList([...dateList,dateValue])
    setDurationList([...durationList,durationValue])
    setDiscriptionList([...discriptionList,discriptionValue])
    setTopiksList([...topiksList,topiksValue])
    setLinkList([...linkList, linkValue])
     setShowAdminForm(!showAdminForm);
     setAddLecture(!addLecture);
  }
  return(
    <div className='space-y-5'>
      <div className='   space-y-2'>
        {addLecture && <Button onClick={password}>+ Add New Lecture</Button>}
        {showPassword && <div className='flex  items-center'>
          <FormCard placeholder='Admin Password' value={passwordValue} onChange={passwordChange} password>Admin Password</FormCard>
        <FiLogIn onClick={checkPassword} className='w-8 h-8 mt-7 md:mt-0'/>
          </div>}
      </div>
      {showAdminForm && <div className='bg-gray-500 md:fixed inset-0 md:px-60 md:pt-10 bg-opacity-50'><LectureAdminPage linkChange={linkChange} linkValue={linkValue} dateChange={dateChange} durationChange={durationChange} discriptionChange={discriptionChange} topiksChange={topiksChange} dateValue={dateValue} durationValue={durationValue} discriptionValue={discriptionValue} topiksValue={topiksValue} uploadClick={uploadClick}/> </div>}
    <H1 secondry>Session List</H1>
    <div className='bg-gray-50 max-w-7xl  '>
      <div className='mx-auto max-w-4xl space-y-6  sm:px-0 py-6 sm:pt-4 sm:pb-8' >
        {getObject(dateList,durationList,discriptionList,topiksList,linkList)}
        </div>
    </div>
  </div>
  );
}
function getObject(dateList,durationList,discriptionList,topiksList,linkList){
const HTML=[];
  for (let i = 0; i < dateList.length; i++) {
    const name=i+1;
    const date=dateList[i];
    const duration=durationList[i];
    const topik=topiksList[i];
    const note=discriptionList[i];
   const link=linkList[i];
    const html=
    <Lecture note={ note!=false && 'Note:' + note} link={link} key={i} topiks={ getTopiks(topik)} duration={duration} date={date}>{name}</Lecture>;
    HTML.push(html)
  } 
  return HTML;
}
function getTopiks(topik){
  const TopiksHTML=[];
  for (let i = 0; i < topik.length; i++) {
   const newTopiks=topik[i];
    const html =newTopiks!=false && <li key={i} className='list-disc'>{newTopiks}</li>;
    TopiksHTML.push(html);
  }
  return TopiksHTML;
}
export default LecturePage;
