import ArtistService from '../services/artist.service';
import Boom from '@hapi/boom';
import Joi from '@hapi/joi';


const artistService = new ArtistService();


const artistRoute  =  [

{
    method: 'GET',
    path : '/artist',
    config: {
    // auth: 'simple',
    handler: async (request, h) => {
        const data = await artistService.findAll();
        return data
 
        },
    }
},
{
    method: 'GET',
    path: '/artist/{id}',
    handler: async (request) => {
        const id = request.params.id;
        const find = await artistService.findById(id);
        return find;
        // if(!find){
        //     throw Boom.notFound('Artist not Found!');
        // }else{
        //     return find;
        // }
    }
},
{
    method: 'GET',
    path: '/artist/genre/{id}',
    handler: async (request) => {
        const id = request.params.id;
        const find = await artistService.findArtistByGenreId(id);

        if(!find){
            throw Boom.notFound('Artist not Found!');
        }else{
            return find;
        }
    }
},
{
    method: 'POST',
    path: '/artist',
    config:{
        handler: (request) => {
            const data = request.payload;
            artistService.create(data);
            return data;
        },
        validate: {
            payload: {
                name: Joi.string().max(100).required(),
                picture: Joi.string().max(255).required(),
            }
        }
    }
},
{
        method: 'PUT',
        path: '/artist/{id}',
        handler: async (request) => {
             const data = await artisService.findOne(request.params.id)
             data.update(request.payload.data)
            return data.save();
        }
},
{
    method: 'DELETE',
    path: '/artist/{id}',
    handler : (request) => {
        const id = request.params.id;
        return artistService.delete(id);
    }
}
]


export default artistRoute;