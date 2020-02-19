import { EntitySchema } from 'typeorm';
import Artist from '../model/artist.model';

const ArtistSchema = new EntitySchema({
    name: 'Artist',
    target: Artist,
    tableName: 'artist',
    columns: {
        id:{
            type: 'int',
            unique: true,
            generated: true,
            nullable: false,
            primary: true
        },
        name: {
            type: 'varchar',    
            length: 100,
            nullable: false,
        },
        picture: {
            type: 'varchar',
            length: 255,
        }

    },
    relations:{
        song:{
            target: 'Song',
            type: 'one-to-many',
            inverseSide: 'song',
            joinColumn: true,
        },
        genre: {
            target: 'Genre',
            type: 'many-to-one',
            inverseSide: 'genre',
            joinColumn: true,
        }
    }
})

export default ArtistSchema;