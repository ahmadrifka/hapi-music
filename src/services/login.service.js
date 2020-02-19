import { getRepository as repository } from 'typeorm';
import Login from '../model/login.model';
import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';



export default class LoginService{

    loginRepository(){
        return repository(Login);
    }


    async findAll(){
        return await this.loginRepository().find();
    }

    async findById(id){
        return await this.loginRepository().findOne(id);
    }

    async findByUsername(username){
        return await this.loginRepository().findOne({username});
    }

    async create(data){
        const{password} = data;
        console.log('before', password)
        data.password = await this.generatePassword(password);
        return this.loginRepository().save(data);
    }

    delete(id){
        return this.loginRepository().delete(id);
    }



    async login(data, req){
        const {username, password} = data;
        const user = await this.findByUsername(username);
        console.log(password);
        console.log(user.password);
        console.log(user)
        req.cookieAuth.set({id: user.id})
        console.log(req);
        if(user && await this.validatePassword(password,user.password)){
            return user;
        }else{
            throw Boom.unauthorized('Invalid Username or Password');
        }
        
    }

    async generatePassword(password){
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(password, salt);
    }

    async validatePassword(password,checkpassword){
        return bcrypt.compareSync(password,checkpassword);
    }


}