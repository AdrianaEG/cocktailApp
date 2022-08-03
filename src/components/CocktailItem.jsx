import React from 'react'

export const CocktailItem = ({title, url, id, setOpenPopUp, setCocktailSelected}) => {

  const showPopUp = (value)=>{
    setOpenPopUp(value);
    setCocktailSelected(id);
  }

  return (
    <>
      <div className='card' onClick={()=>{showPopUp(true)}}>
          <p>{title}</p>
          <img src={url} alt={title} />
      </div>
    </>
  )
}
