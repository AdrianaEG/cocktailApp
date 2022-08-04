import {render, screen} from '@testing-library/react'
import { CocktailsGrid } from "../../src/components/CocktailsGrid"
import { useFetchCocktails } from '../../src/hooks/useFetchCocktails'

jest.mock('../../src/hooks/useFetchCocktails')

describe('Pruebas en el componente CocktailsGrid', ()=>{
    const category = 'Gin'
    test('Debe mostrar el loading inicialmente', ()=>{
        useFetchCocktails.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<CocktailsGrid category={category} />)
        expect(screen.getByRole('img'))
        expect(screen.getByText(category))
    })
    test('Debe mostrar ítems cuando se cargan las imágenes mediante el useFetchCocktails', ()=>{
        const cocktails = [
            {
                id: 'ABC',
                title: 'Vermouth',
                url: 'https://localhost.vermouth.jpg'
            },
            {
                id: 'ACDF',
                title: 'daikiri',
                url: 'https://localhost.daikiri.jpg'
            }
        ]
        useFetchCocktails.mockReturnValue({
            cocktails: cocktails,
            isLoading:false,
            error: false
        })
        render(<CocktailsGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})