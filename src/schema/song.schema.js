import { EntitySchema,} from 'typeorm';
import Song from '../model/song.model';

const SongSchema = new EntitySchema({
    name: 'Song',
    target: Song,
    tableName: 'song',
    columns: {
        id:{
            type: 'int',
            unique: true,
            generated: 'increment',
            nullable: false,
            primary: true
        },
        title:{
            type:'varchar',
            length: 100,
            nullable: false,
        },
        picture: {
            type:'varchar',
            length: 255,
            nullable: false
        }
    },
    relations:{
        artist:{
            target: 'Artist',
            type: 'many-to-one',
            inverseSide: 'artist',
            JoinColumn: true,
        }
    }
})


export default SongSchema;