import { useState } from 'react';

export const setUpForm=(initialValue)=>{
  const [formData, setFormData]=useState(initialValue)
  const handleChange=(event)=>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  return {formData,handleChange}
}