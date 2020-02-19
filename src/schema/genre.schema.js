import { EntitySchema } from 'typeorm';
import Genre from '../model/genre.model';

const GenreSchema = new EntitySchema({
    name: 'Genre',
    target: Genre,
    tableName: 'genre',
    columns: {
        id:{
            type: 'int',
            generated: 'increment',
            unique: true,
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
            nullable: false,
        }
    },
    relations: {
        artist: {
            target: 'Artist',
            type: 'one-to-many',
            inverseSide: 'artist',
            joinColumn: true,
        }
    }
})

export default GenreSchema;