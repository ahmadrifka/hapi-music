import ArtistService from "../../src/services/artist.service";
import init from "../../src/api";

let server;
const artisService = new ArtistService();



const raisa = {
    id: 1,
    name: "raisa",
    picture: "raisa.jpg",
}
const danila = {
    id: 2,
    name: "danila",
    picture: "danila.jpg",
}




describe('artist service', ()=>{
    

    beforeEach(async()=>{
        server = await init();
        await artisService.artistRepository().clear();
        
    })
    
    it('create method should return artist', async ()=>{
        const saveArtist = await artisService.create(raisa);
        const findArtist = await artisService.findById(raisa.id);

        expect(findArtist).toMatchObject(raisa)
    })


    

    afterEach( async () => {
        if(server){
            server.close();
        }
    })


})


describe ('Find All ', ()=>{
    
    beforeEach(async()=>{
        await artisService.artistRepository().clear();
      
    })

    it('should return size of artist list', async()=>{
        await artisService.create(danila);
        const currentArtistList = await artisService.findAll();

        expect(currentArtistList.length).toBe(1);

    })

    afterEach( async () => {
        if(server){
            server.close();
        }
    })





})