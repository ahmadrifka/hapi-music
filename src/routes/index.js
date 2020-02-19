import landing from './landing/index';
import artist from '../routes/artist.route';
import genre from '../routes//genre.route';
import login from '../routes/login.route'

const routes = [].concat(
    landing, 
    artist,
    genre,
    login
    );

export default routes;