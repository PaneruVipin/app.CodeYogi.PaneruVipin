import React from 'react';
import { useState, useContext } from 'react';
import { FormContext } from './Context';
export function Form({onSubmit,children, ...rest}) {
	const submit = () => {
		event.preventDefault();
		onSubmit();
	};
	return(
    <form onSubmit={submit}>
      {children}
    </form> 
  )
}

export const setUpForm = (initialValue) => {
	const [formData, setFormData] = useState(initialValue);
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return { formData, handleChange };
};   

export const validationForm = (initialValidation,formData) => {
 const [error, setError] = React.useState('')
  const validator=initialValidation;
  const blur = () =>{
    try{
      const valid=validator.validateSync(formData);
      setError('');
    } catch (e){
      setError(e.message)
    }
   
  }
  
  return {blur, error, formData};

}
