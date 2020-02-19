import { getRepository as repository } from 'typeorm';
import Song from '../model//song.model';

export default class SongService{
    songRepository(){
        return repository(Song);
    }

    findAll(){
        return this.songRepository().find();
    }

    findOne(id){
        return this.songRepository().findOne(id);
    }

    findSongByArtistId(Artistid){
        return this.songRepository().findOne({Artistid});
    }

    create(data){
        return this.songRepository().save(data);
    }

    update(data){
        return this.songRepository.update(data);
    }

    delete(id){
        return this.songRepository().delete(id);
    }
}