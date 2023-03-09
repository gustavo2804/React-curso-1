import { fireEvent, render,screen } from "@testing-library/react";
import { Button } from "bootstrap";
import { CounterApp } from "../src/CounterApp";


describe("pruebas sobre counterapp", ()=>{

    const value = 10;
    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => {

        render(< CounterApp value={value} />);
        
        expect(screen).toMatchSnapshot();


     });


     test('debe de mostrar el valor inicial de 10', () => {

        render(< CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();


      })

      test('debe de incrementar el valor inicial en 1', () => {


        render(< CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();


       })


       test('debe de decrementar el valor inicial en 1', () => {


        render(< CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'))
        // screen.debug(); para mostrar en pantalla el screen
        expect(screen.getByText('9')).toBeTruthy();


       })

       test('debe de funcionar el boton de reset', () => {

        render(< CounterApp value={255} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
       
        // screen.debug();
        fireEvent.click(screen.getByRole("button", {name:"reset-button"}));
    

        expect(screen.getByText(255)).toBeTruthy();








       })

})
