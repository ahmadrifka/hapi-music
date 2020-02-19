import {getRepository as repository } from 'typeorm';
import Genre from '../model/genre.model';

export default class GenreService{
    genreRepository(){
        return repository(Genre);
    }

    findAll(){
        return this.genreRepository().find();
    }

    findOne(id){
        return this.genreRepository().findOne(id);
    }

    create(data){
        return this.genreRepository().save(data);
    }

    update(data){
        return this.genreRepository().update(data);
    }

    delete(id){
        return this.genreRepository().delete(id);
    }
}
