import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('pruebas en el archivo 08-imp-exp',()=>{

        
    test('getHeroById debe de retornar un heroe opr ID',()=>{
    
    
        const id = 1;
        const hero = getHeroeById( id);
        expect( hero ).toEqual({id:1, name:'Batman', owner:'DC'});
    
    });

    test('getHeroById debe de retornar un undefined',()=>{
    
    
        const id = 100;
        const hero = getHeroeById( id);
        expect( hero ).toBe(undefined);
    
    });

    test('getHeroByOwner debe de retornar un arreglo con los heroes de DC',()=>{
    
    
        const owner = 'DC';
        const hero = getHeroesByOwner( owner);
        expect( hero ).toEqual([{ id: 1,
            name: 'Batman',
            owner: 'DC'}, {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            }, {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]);
        expect(hero.length).toBe(3);
        expect(hero).toEqual(heroes.filter((heroe)=> heroe.owner === owner));
    });

    
    test('getHeroByOwner debe de retornar un arreglo con los heroes de Marvel',()=>{
    
    
        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner);
        expect( hero ).toEqual([{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },{
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]);
        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter((heroe)=> heroe.owner === owner));
    });

})