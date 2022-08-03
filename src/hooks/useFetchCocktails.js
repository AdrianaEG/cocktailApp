import { useEffect, useState } from "react";
import { getCocktails } from "../helpers/getCocktails";

export const useFetchCocktails = (category)=>{
    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getDrinks = async()=>{
      const newCocktails = await getCocktails(category)
      setCocktails(newCocktails);
      setIsLoading(false);
    }
    useEffect(()=>{
        getDrinks();
    }, []);
    return {
        cocktails: cocktails,
        isLoading: isLoading,
    }
}