import React from 'react';
import H1 from './H1';
import FormCard from './FormCard';
import Label from './Label';
import Button from './Button';
function ProfilePage(){
  return(
    <div className='bg-white max-w-7xl px-4'>
      <div className='pl-6 py-6 border-b border-gray-200'>
    <H1 secondry>Personal details</H1>
      </div>
      <FormCard mandatory placeholder='First Name'>First Name</FormCard>
      <FormCard ifDocument placeholder='Last Name '>Last Name</FormCard>
      <FormCard mandatory placeholder='Email address'>Email</FormCard>
      <FormCard mandatory placeholder='Institute Name'>Institute Name</FormCard>
      <FormCard date  placeholder='Select a Date'>Year Of Passout</FormCard>
      <FormCard mandatory placeholder='Enter Your Mobile No.'>Phone Number</FormCard>
      <FormCard date mandatory placeholder='Select a Date'>Date Of Birth </FormCard>
        
      <div className='flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center md:border-b md:border-gray-200'>
      <div>
        <Label>Device you are using to do your assignments</Label>
        <span className="text-red-500 text-sm font-medium ml-1">*</span>
        </div>
        <div className='grow max-w-3xl mt-2 md:mt-0'>
        <select  className=' w-full px-3 py-2 border border-gray-300 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md'>
        <option disabled hidden >Select the device you are using</option>
          <option>Mobile with keyboard</option>
          <option>Mobile without keyboard</option>
          <option>Personal Computer/Laptop</option>
          <option>College Computer/Laptop</option>
        </select>
      </div>
        </div>
      
      <FormCard placeholder='Institute roll number'>Institute roll no.</FormCard>
      <FormCard placeholder='Branch'>Branch</FormCard>
      <div className='pl-1 pt-5 pb-8'>
      <Button>Update</Button>
        </div>
      
    </div>
  );
}
export default ProfilePage;