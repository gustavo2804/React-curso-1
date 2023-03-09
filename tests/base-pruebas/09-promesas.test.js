import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('pruebas en el archivo 09-promesas', ()=>{


    test('getHeroeByIdAsync debe de retornar un heroe', (done)=>{
    
    
    
        const id = 1;
        getHeroeByIdAsync( id )
            .then(hero =>{
            
            expect(hero).toBe(heroes.find((hero) =>hero.id === id));
            
            done();
            }    
                )
    
    
    
    
    
    })

    test('getHeroeByIdAsync debe de retornar un error', (done)=>{
    
    
    
        const id = 100;
        getHeroeByIdAsync( id )
            .catch(error =>{
            
                console.log(error);
                expect(error).toBe('No se pudo encontrar el héroe');
            
            done();
            }    
                )
    
    
    
    
    
    })



})