import { getCocktails } from "../../src/helpers/getCocktails"

describe('Prueba en el helper getCocktails', ()=>{
    test('Le paso una categoría y me debe devolver un arreglo de cocktails', async()=>{
        const cocktails = await getCocktails('Gin')
        expect(cocktails.length).toBeGreaterThan(0);
        expect(cocktails[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})