import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length<=1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    const onInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text" 
            placeholder='Search by ingredient'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
