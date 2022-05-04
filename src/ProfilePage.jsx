import React from 'react';
import H1 from './H1';
import { MyFormikInput } from './InputCard';
import Label from './Label';
import Button from './Button';
import {object, string, number, date} from 'yup';
import { Formik, Form, Field } from 'formik';
function ProfilePage() {
  const onSubmit = (data) => {
    const DeveceUse=document.getElementById('Work_device').value
    data['Work_device']=DeveceUse;
    console.log(data)
  }
  const validationSchema = object().shape({
    FName:string().required(),
    LName:string().required(),
    Institute:string().required(),
    YearPassout:date().required(),
    DateOfBirth:date().required(),
    Branch:string().required(),
    email:string().required().email(),
    Contact:number().required().positive().integer(),
    RollNumber:number().required().positive().integer(),
    
  })
  const initialValues ={
    email:'',
    Contact:'',
    RollNumber:'',
    FName:'',
    LName:'',
    Institute:'',
    YearPassout:'',
    DateOfBirth:'',
    Branch:'',
  }
	return (
		<Formik onSubmit={onSubmit}
      validationSchema={ validationSchema }
      initialValues={ initialValues }>
			<Form className="bg-white max-w-7xl px-4">
				<div className="pl-6 py-6 border-b border-gray-200">
					<H1 secondry>Personal details</H1>
				</div>
				<MyFormikInput 
          name='FName'
          id='FName'
          mandatory="true" placeholder="First Name">
					First Name
				</MyFormikInput>
				<MyFormikInput 
          name='LName'
          id='LName'
          ifDocument placeholder="Last Name ">
					Last Name
				</MyFormikInput>
				<MyFormikInput 
          name='email'
          id='email'
          mandatory="true" placeholder="Email address">
					Email
				</MyFormikInput>
				<MyFormikInput
          name='Institute'
          id='Institute'
          mandatory="true" placeholder="Institute Name">
					Institute Name
				</MyFormikInput>
				<MyFormikInput 
          id='YearPassout'
          name='YearPassout'
          type="date" placeholder="Select a Date">
					Year Of Passout
				</MyFormikInput>
				<MyFormikInput 
          name='Contact'
          id='Contact'
          mandatory="true" placeholder="Enter Your Mobile No.">
					Phone Number
				</MyFormikInput>
				<MyFormikInput 
          id='DateOfBirth'
          name='DateOfBirth'
          type="date" mandatory="true" placeholder="Select a Date">
					Date Of Birth
				</MyFormikInput>

				<div className="flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center md:border-b md:border-gray-200">
          <div>
						<Label>Device you are using to do your assignments</Label>
						<span className="text-red-500 text-sm font-medium ml-1">*</span>
					</div>
          <div className="grow max-w-3xl mt-2 md:mt-0">
						<select 
              name='Work_device'
              id='Work_device'
              className=" w-full px-3 py-2 border border-gray-300 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md">
							<option value='Option are not Selected'>
								Select the device you are using
							</option>
							<option  value='Mobile with keyboard'>Mobile with keyboard</option>
							<option value='Mobile without keyboard'>Mobile without keyboard</option>
							<option value='Personal Computer/Laptop'>Personal Computer/Laptop</option>
							<option value='College Computer/Lapto'>College Computer/Laptop</option>
						</select>
					</div>
				</div>
				<MyFormikInput
          id='RollNumber'
          name='RollNumber'
          placeholder="Institute roll number">
					Institute roll no.
				</MyFormikInput>
				<MyFormikInput
          id='Branch'
          name='Branch'
          placeholder="Branch">Branch</MyFormikInput>
				<div className="pl-1 pt-5 pb-8">
					<Button type='submit'>Update</Button>
				</div>
			</Form>
		</Formik>
	);
}
export default ProfilePage;
