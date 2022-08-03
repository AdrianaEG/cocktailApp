import React from 'react';
import { CocktailItem } from './CocktailItem';
import { useFetchCocktails } from '../hooks/useFetchCocktails';
import loading from '../assets/loading-grey.svg'

export const CocktailsGrid = ({category, setOpenPopUp, setCocktailSelected}) => {

  const {cocktails, isLoading, error } = useFetchCocktails(category)

  return (
    <>
    {
      error ?
      <>
        <p className='warning'>No se encontraron cocteles que contengan {category}</p>
        
      </>
      :
      <>
        <h3>{category}</h3>
        {
          isLoading &&
          <img src={loading} alt="cargando..." className='loading' />
        }
                <div className='card-grid'>
          {cocktails.map((cocktail)=>(
            <CocktailItem 
              key={cocktail.id} 
              title={cocktail.title} 
              url={cocktail.url} 
              id={cocktail.id}
              setOpenPopUp={setOpenPopUp}
              setCocktailSelected={setCocktailSelected}
              />
          ))}
         
        </div>
      </> 
    }
    </>
  )
}
