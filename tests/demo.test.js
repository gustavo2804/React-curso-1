
describe('Pruebas en <  DemoComponent', ()=>{

    test('Esta prueba no puede fallar', ()=>{

        const Message1 ='hola mundo';
     
        const Message2 = Message1.trim();
     
     
     expect( Message1 ).toBe( Message2 );
             
     });

})


