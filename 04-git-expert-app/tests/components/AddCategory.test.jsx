import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en AddCategory ',()=>{
    test('debe cambiar el valor de la caja de texto', () =>{
        //se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={()=>{}}/>);
        //extraemos el objeto input
        const input = screen.getByRole('textbox');
        //screen.debug();
        //cambiamos el valor al objeto activando el evento y enviando el nuevo valor
        fireEvent.input(input,{target:{value:'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    test('debe llamar onNewCategory si el input tiene un valor', () =>{
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); //creamos una funcion de pruebas
        //se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory}/>);
        //extraemos el objeto input
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //cambiamos el valor al objeto activando el evento y enviando el nuevo valor
        fireEvent.input( input, { target:{ value: inputValue}});
        expect(input.value).toBe(inputValue);
        fireEvent.submit( form );
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar onNewCategory si el input esta vacio', () =>{
        const inputValue = '';
        const onNewCategory = jest.fn(); //creamos una funcion de pruebas
        //se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory}/>);
        //extraemos el objeto input
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //cambiamos el valor al objeto activando el evento y enviando el nuevo valor
        fireEvent.input( input, { target:{ value: inputValue}});
        expect(input.value).toBe(inputValue);
        fireEvent.submit( form );
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
})