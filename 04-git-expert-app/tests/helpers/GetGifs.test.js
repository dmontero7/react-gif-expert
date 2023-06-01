import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas en GetGifs()',()=>{
    test('debe de retornar un arreglo de gifs',async()=>{
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect (gifs.length).toBeGreaterThan(0);
        expect (gifs[0]).toEqual({
            title:expect.any(String),
            id:expect.any(String),
            url:expect.any(String)
        })
    });
})