import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { CocktailsGrid } from './components/CocktailsGrid';
import { PopUp } from './components/PopUp';

export const CocktailsApp = () => {

    const [categories, setCategories] = useState(['Anis']);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [cocktailSelected, setCocktailSelected] = useState('');
    const handleAddCategory = (category)=>{
        if(categories.includes(category))return;
        setCategories([...categories, category]);
    }

  return (
    <>
    <AddCategory onNewCategory={handleAddCategory}/>
    
    {
      openPopUp ?
      <PopUp setOpenPopUp={setOpenPopUp} cocktailSelected={cocktailSelected}/>
      :
      categories.map(category=>(
          <CocktailsGrid category={category}
          setOpenPopUp={setOpenPopUp}
          setCocktailSelected={setCocktailSelected}
          />
      ))
    }
    </>
  )
}
