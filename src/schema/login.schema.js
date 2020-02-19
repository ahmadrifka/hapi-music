import {EntitySchema} from 'typeorm';
import Login from '../model/login.model';

const LoginSchema = new EntitySchema({
    name : 'Login',
    target : Login,
    tableName : 'login',
    columns: {
        id:{
            type: 'int',
            generated: true,
            unique: true,
            nullable: false,
            primary: true,
        },
        username:{
            type: 'varchar',
            length: 100,
            nullable: false
        },
        password:{
            type: 'varchar',
            length: 255,
            nullable: false,
        }
    }
})

export default LoginSchema;