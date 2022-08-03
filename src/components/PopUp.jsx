import React from 'react'
import { useEffect, useState } from 'react'
import { getCocktail } from '../helpers/getCocktail'
import loading from '../assets/loading.svg'

export const PopUp = ({id, setOpenPopUp, cocktailSelected}) => {

    const [cocktail, setCocktail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDrink = async()=>{
      const newCocktail = await getCocktail(cocktailSelected)
      setCocktail(newCocktail);
      setIsLoading(false);
    }
    useEffect(()=>{
        getDrink(cocktailSelected);
    }, [])
    

  return (
    <div className='popup'>
        {
            isLoading && (
                <img src={loading} className="loading"/>
            )
        }
        <button onClick={()=>{setOpenPopUp(false)}}>BACK</button>
        <h1>{cocktail.title}</h1>
        <p className='m-0 w-bold'>Glass: <span>{cocktail.glass}</span></p>
        <p className='m-0 w-bold'> Category: <span>{cocktail.category}</span></p>
        <img src={cocktail.image} alt={cocktail.title}/>
        <p className='mt-0 w-bold'>Ingredients:
        {
            cocktail.ingredients && (
                cocktail.ingredients.map((ingredient)=>(
                    ingredient&&<span> {ingredient}. </span>
                ))
            )
        }
        </p>
        <p className='mt-0 w-bold' >Instructions: <span>{cocktail.instructions}</span></p>
        {cocktail.video && <link rel="stylesheet" href={cocktail.video} />}
    </div>
    
  )
}
