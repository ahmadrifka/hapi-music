import {  getRepository as repository } from 'typeorm';
import Artist from '../model/artist.model';
import Boom from '@hapi/boom';

export default class ArtistService{
    artistRepository(){
        return repository(Artist);
    }

findAll(){
    return this.artistRepository().find({relations:['genre']});
}

async findById(id){
    const data = await this.artistRepository().findOne(id);
    if(!data){
        return Boom.notFound('Artist Not Found!');
    }
    return data;
}

findArtistByGenreId(GenreId){ 
    const artist = this.artistRepository().find({genre:GenreId});
    return artist ;
}

create(data){
    return this.artistRepository().save(data);
}

update(data){
    return this.artistRepository().update(data);
}

delete(id){
    const data = this.findById(id);
    return this.artistRepository().delete(data);
}






}