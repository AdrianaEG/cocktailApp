import { useEffect, useState } from "react";
import { getCocktails } from "../helpers/getCocktails";

export const useFetchCocktails = (category)=>{
    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const getDrinks = async()=>{
        try{
            const newCocktails = await getCocktails(category)
            setCocktails(newCocktails);
            setIsLoading(false);
        }
        catch(error){
            setError(true);
        }
    }
    useEffect(()=>{
        getDrinks();
    }, []);
    return {
        cocktails: cocktails,
        isLoading: isLoading,
        error: error
    }
}