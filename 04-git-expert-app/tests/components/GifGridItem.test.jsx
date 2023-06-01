import { GifGridItem } from "../../src/components";
import { render, screen } from '@testing-library/react';

const title = 'Saitama';
const url = 'https://one-punch.com/saitama.jpg';

describe('Pruebas en <GifGridItem/>',()=>{
    test('debe de hacer match con el snapshot',()=>{
        const {container} = render(<GifGridItem title = {title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado',()=>{
        render(<GifGridItem title = {title} url={url}/>);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} =screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente',()=>{
        render(<GifGridItem title = {title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})