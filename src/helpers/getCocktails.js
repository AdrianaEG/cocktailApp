export const getCocktails = async(category)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    const resp = await fetch(url);
    const {drinks} = await resp.json();
    console.log(drinks)
    const cocktails = drinks.map( cocktail=>(
        {
            id: cocktail.idDrink,
            title: cocktail.strDrink,
            url: cocktail.strDrinkThumb
        }
    ))
    return cocktails;
}