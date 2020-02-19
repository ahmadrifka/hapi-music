import request from 'supertest';
import init from '../../src/api';
import LoginService from '../../src/services/login.service'

let app;
const loginService = new LoginService();


describe('landing', () => {

    beforeEach(async () => {
        app = await init();

    });

    it('GET/ endpoint hello world', async () => {
        const res = await request(app)
            .get("/");

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
            statusCode: 200,
            message: "HELLO WORLD"
        })
    })


    afterEach(async () => {
        if (app) {
            app.close();
        }
    })


})



const payloads = [
    {
        "username": "agentpaul",
        "password": "agentpaul",
        "id": 1
    },
    {
        "username": "agentdedy",
        "password": "dedyadalahayah",
        "id": 2
    }
]

describe('Login', () => {

    beforeEach(async()=>{
        await loginService.loginRepository().clear();
    })


    it('GET/ endpoint findall', async () => {


        payloads.forEach(async (e) => {
            await loginService.create(e);
        })

        const res = await request(app)
            .get("/login")
            .auth('agentdedy', 'dedyadalahayah')

            console.log(res.body)
            console.log(payloads)

            const actual = await loginService.findAll();
            console.log(actual)
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(actual)

    })


    afterEach(async () => {
        if (app) {
            app.close();
        }
    })


})