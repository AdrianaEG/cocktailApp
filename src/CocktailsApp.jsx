import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { CocktailsGrid } from './components/CocktailsGrid';

export const CocktailsApp = () => {

    const [categories, setCategories] = useState(['Anis', 'Whisky']);

    const handleAddCategory = (category)=>{
        if(categories.includes(category))return;
        setCategories([...categories, category]);
    }

  return (
    <>
    <AddCategory onNewCategory={handleAddCategory}/>
    
    {categories.map(category=>(
        <CocktailsGrid category={category}/>
    ))}
    </>
  )
}
