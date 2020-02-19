import GenreService from '../services/genre.service';


const genreService = new GenreService();


const genreRoute  =  [

{
    method: 'GET',
    path : '/genre',
    handler: async (request, h) => {
        const data = await genreService.findAll();
        return data
 
   }
},
{
    method: 'GET',
    path: '/genre/{id}',
    handler: async (request) => {
        const id = request.params.id;
        return await genreService.findOne(id);
    }
},
{
    method: 'POST',
    path: '/genre/',
    handler: (request) => {
        const data = request.payload;
        genreService.create(data);
        return data;
    }
},
{
        method: 'PUT',
        path: '/genre/{id}',
        handler: async (request) => {
             const data = await genreService.findOne(request.params.id)
             data.update(request.payload.data)
            return data.save();
        }
},
{
    method: 'DELETE',
    path: '/genre/{id}',
    handler : (request) => {
        const id = request.params.id;
        return genreService.delete(id);
    }
}
]


export default genreRoute;