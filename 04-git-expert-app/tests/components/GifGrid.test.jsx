import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

const category = 'One Punch';
describe('Pruebas en GifGrid', () => { 
    test('debe de mostrar el loading inicialmente',()=>{
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('debe mostrar items cuando se cargan las imagenes useFetchGifs',()=>{
        const gifs = [{
            id:'ABC',
            title:'Saitama',
            url:'https://saitama.com/onepunch.jpg'
        },{
            id:'123',
            title:'Goku',
            url:'https://dragonball.com/goku.jpg'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
 })