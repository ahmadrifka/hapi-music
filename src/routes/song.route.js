import SongService from '../services/song.service';
import Boom from '@hapi/boom';


const songService = new SongService();


const songRoute  =  [

{
    method: 'GET',
    path : '/song',
    handler: async (request, h) => {
        const data = await songService.findAll();
        return data
 
   }
},
{
    method: 'GET',
    path: '/song/{id}',
    handler: async (request) => {
        const id = request.params.id;
        const find = await songService.findOne(id);

        if(!find){
            throw Boom.notFound('Song not Found!');
        }else{
            return find;
        }
    }
},
{
    method: 'GET',
    path: '/artist/genre/{id}',
    handler: async (request) => {
        const id = request.params.id;
        const find = await songService.findSongByArtistId(id);

        if(!find){
            throw Boom.notFound('Song not Found!');
        }else{
            return find;
        }
    }
},
{
    method: 'POST',
    path: '/song',
    handler: (request) => {
        const data = request.payload;
        songService.create(data);
        return data;
    }
},
{
        method: 'PUT',
        path: '/song/{id}',
        handler: async (request) => {
             const data = await songService.findOne(request.params.id)
             data.update(request.payload.data)
            return data;
        }
},
{
    method: 'DELETE',
    path: '/song/{id}',
    handler : (request) => {
        const id = request.params.id;
        return songService.delete(id);
    }
}
]


export default songRoute;