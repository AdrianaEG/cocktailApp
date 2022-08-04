import {renderHook, waitFor} from '@testing-library/react'
import { useFetchCocktails } from '../../src/hooks/useFetchCocktails'


describe('Pruebas en el custom Hook useFetchCocktails', ()=>{
    test('Debe regresar el estado inicial, que las img sea un arreglo vacío y que no haya cocteles', ()=>{
        const {result} = renderHook(()=>useFetchCocktails('Gin'))
        const {cocktails, isLoading} = result.current;
        expect(cocktails.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('debe retornar un arreglo de cocteles y el isloading en false', async()=>{
        const {result} = renderHook(()=>useFetchCocktails('Vodka'));

        await waitFor(
            ()=>expect(result.current.cocktails.length).toBeGreaterThan(0),
            { timeout: 3000 }
        );
        const {cocktails, isLoading} = result.current;
        expect(cocktails.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
})