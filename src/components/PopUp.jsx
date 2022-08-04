import React from 'react'
import { useEffect, useState } from 'react'
import { getCocktail } from '../helpers/getCocktail'

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
                <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1" className="loading"/>
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
