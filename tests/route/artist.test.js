import request from 'supertest';
import init from '../../src/api';
import ArtisService from '../../src/services/artist.service';

let app;
const artistService = new ArtisService();


const artist = [
    {
        id: 1,
        name: "Raisa",
        picture: "raisa.jpg"
    },
    {
        id: 2,
        name: "Dedy",
        picture: "dedy.jpg"
    },

]


describe('artist findAll', ()=> {

    beforeEach(async ()=>{
        app = await init();
        await artistService.artistRepository().clear();
    });



    it('GET/ endpoint findall', async ()=> {
        const res = await request(app)
        .get('/artist')


        artist.forEach( async (e)=>{
            await artistService.create(e);
        })

        const findAll = await artistService.findAll();

        
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(findAll);        
    })

    afterEach(async () => {
        if (app) {
            app.close();
        }
    })

    
})

const payload = {
    name: 'Raisa',
    picture: 'raisa.jpg',
    genre: undefined
}

describe('findById', () => {

    beforeEach(async ()=>{
        await artistService.artistRepository().clear();
    });


    it('GET/{id} findbyid', async() => {

        const raisa = await artistService.create(payload);
    
        console.log(raisa)
        const res = await request(app)
        .get(`/artist/${raisa.id}`)

        const actual = await artistService.findById(raisa.id);

        console.log(res.body)
        console.log(actual)

        expect(raisa).toMatchObject(actual)

    })

    afterEach(async () => {
        if (app) {
            app.close();
        }
    })


})

