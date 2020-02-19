import { createConnection as connect } from 'typeorm';
import entities from '../schema/entities';

const createConnection = async () => {
    const connection = await connect({
        type: process.env.DB_DRIVER,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: '',
        database: process.env.DB_NAME,
        synchronize: process.env.DB_SYNC,
        logging: process.env.LOGGING,
        entities,
    });

    return connection;
}

export default createConnection;