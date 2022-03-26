import React from 'react';
import H1 from './H1';
import ProfileRow from './ProfileRow';
import Label from './Label';
import Button from './Button';
function ProfilePage(){
  return(
    <div className='bg-white max-w-7xl px-4'>
      <div className='pl-6 py-6 border-b border-gray-200'>
    <H1 secondry>Personal details</H1>
      </div>
      <ProfileRow mandatory placeholder='First Name'>First Name</ProfileRow>
      <ProfileRow ifDocument placeholder='Last Name '>Last Name</ProfileRow>
      <ProfileRow mandatory placeholder='Email address'>Email</ProfileRow>
      <ProfileRow mandatory placeholder='Institute Name'>Institute Name</ProfileRow>
      <ProfileRow date  placeholder='Select a Date'>Year Of Passout</ProfileRow>
      <ProfileRow mandatory placeholder='Enter Your Mobile No.'>Phone Number</ProfileRow>
      <ProfileRow date mandatory placeholder='Select a Date'>Date Of Birth </ProfileRow>
        
      <div className='flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center border-b border-gray-200'>
      <div>
        <Label>Device you are using to do your assignments</Label>
        <span class="text-red-500 text-sm font-medium ml-1">*</span>
        </div>
        <div className='w-full max-w-3xl'>
        <select  className=' w-full px-3 py-2 border border-gray-300 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md'>
        <option disabled hidden >Select the device you are using</option>
          <option>Mobile with keyboard</option>
          <option>Mobile without keyboard</option>
          <option>Personal Computer/Laptop</option>
          <option>College Computer/Laptop</option>
        </select>
      </div>
        </div>
      
      <ProfileRow placeholder='Institute roll number'>Institute roll no.</ProfileRow>
      <ProfileRow placeholder='Branch'>Branch</ProfileRow>
      <div className='pl-1 pt-5 pb-8'>
      <Button>Update</Button>
        </div>
      
    </div>
  );
}
export default ProfilePage;