export const getCocktail = async(id)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const resp = await fetch(url);
    const {drinks} = await resp.json();
    const cocktail = {
        title: drinks[0].strDrink,
        glass: drinks[0].strGlass,
        category: drinks[0].strCategory,
        image: drinks[0].strDrinkThumb,
        ingredients: [drinks[0].strIngredient1, drinks[0].strIngredient2, drinks[0].strIngredient3, drinks[0].strIngredient4, drinks[0].strIngredient5, drinks[0].strIngredient6, drinks[0].strIngredient7, drinks[0].strIngredient8, drinks[0].strIngredient9, drinks[0].strIngredient10, drinks[0].strIngredient11, drinks[0].strIngredient12, drinks[0].strIngredient13, drinks[0].strIngredient14, drinks[0].strIngredient15],
        instructions: drinks[0].strInstructions,
        video: drinks[0].strVideo
    }

    return cocktail;
}