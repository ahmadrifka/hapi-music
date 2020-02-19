import Hapi from '@hapi/hapi';
import routes from './routes/index';
import configuration from './config';
import createConnection from './db/connection';
import validate from './config/auth';

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

export default async () => {
    configuration();
    const connection = await createConnection();
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST,
    });

    await server.register(require('@hapi/basic'));
    await server.register(require('@hapi/cookie'))

    server.state('session', {  
        ttl: 1000 * 60 * 60 * 24,    // 1 day lifetime
        encoding: 'base64json'       // cookie data is JSON-stringified and Base64 encoded
      })
      
    await server.auth.strategy('simple','basic',{validate});
    // server.auth.default('session')
    await server.route(routes);

    if (connection.isConnected) {
        await server.start();
        console.log(`Database connection name ${process.env.DB_NAME}`);
        console.log('Server', process.env.APP_NAME, `running on ${server.info.uri}`);
    }


    return server.listener;
}