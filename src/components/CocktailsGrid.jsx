import React from 'react';
import { CocktailItem } from './CocktailItem';
import { useFetchCocktails } from '../hooks/useFetchCocktails';


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
          <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1" alt="cargando..." className='loading' />
        }
                <div className='card-grid'>
          { cocktails && cocktails.map((cocktail)=>(
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
