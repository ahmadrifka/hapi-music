import LoginService from '../services/login.service';

const loginService = new LoginService();
    
const loginRoute = [
    {
        method: 'GET',
        path: '/login',
        options : {
        auth: 'simple',
        state: {
            parse: true,
            failAction: 'error'
        },
        handler: async (req,h) => {

            let cookie = req.state.session

            if(!cookie){
                cookie = {
                    username: 'admin',
                    firstVisit: false,
                }
            }

            cookie.lastVisit = Date.now();
            
                const data = await loginService.findAll();
                console.log(cookie);``
                return h.response(data).state('session', cookie)
        
        }
      }
    },
    {
        method: 'POST',
        path: '/login/new',
        handler: async (request) => {
            const data = request.payload;
            loginService.create(data);
            return data;
        }
    },{
        method: 'DELETE',
        path: '/login/{id}',
        handler: (request) => {
            const data = request.params.id;
            return loginService.delete(data);
        }
    },
    {
        method: 'POST',
        path: '/login',
        config:{

        handler: (request, h) => {
            loginService.login(request.payload,request);
            return h.redirectTo('/login')
        }
    }
    },{
        method: 'GET',
        path: '/logout',
        config:{
            // auth: 'session',
            handler:(request) => {
                request.cookieAuth.clear();
                return 'Cookie cleared';
            }
        }
    }
]

export default loginRoute;