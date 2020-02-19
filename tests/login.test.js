// const calculate = require('../src/example');
import calculate from '../src/example';

// import LoginService from "../src/services/login.service"

// describe('Login Test', () => {

//     const loginService = new LoginService();

//     it('Find all', async() => {
//         const expected = await loginService.findAll();
//         expect(expected).toHaveLength(0);
//     })

// })



describe('testing', ()=>{
    test('calculate', ()=> {
        let cal = calculate(3,3);
        expect(cal).toBe(9);
    })
})