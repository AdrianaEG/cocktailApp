import React from 'react';
import { CocktailItem } from './CocktailItem';
import { useFetchCocktails } from '../hooks/useFetchCocktails';

export const CocktailsGrid = ({category}) => {
  const {cocktails, isLoading } = useFetchCocktails(category)
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading &&
          <p>Cargando...</p>
        }
        <div className='container'>
          {cocktails.map((cocktail)=>(
            <CocktailItem 
              key={cocktail.id} 
              title={cocktail.title} 
              url={cocktail.url} />
          ))}
         
        </div>
    </>
  )
}
