import { CocktailItem } from "../../src/components/CocktailItem"
import {render, screen } from '@testing-library/react';

describe('Pruebas en el componente CocktailItem', ()=>{
    const title="party";
    const url="https://party.com/"
    test('Debe hacer match con el snapshot', ()=>{
        const {container} = render(<CocktailItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })
    test('El componente CocktailItem debe si o si tener una url y un título', ()=>{
        render(<CocktailItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    test('Debe mostrar el título en el componente', ()=>{
        render(<CocktailItem title={title} url={url}/>)
       expect(screen.getByText(title)).toBeTruthy();
    })
})