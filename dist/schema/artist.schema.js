"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _artist = _interopRequireDefault(require("../model/artist.model"));

var ArtistSchema = new _typeorm.EntitySchema({
  name: 'Artist',
  target: _artist["default"],
  tableName: 'artist',
  columns: {
    id: {
      type: 'int',
      unique: true,
      generated: true,
      nullable: false,
      primary: true
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    picture: {
      type: 'varchar',
      length: 255
    }
  },
  relations: {
    song: {
      target: 'Song',
      type: 'one-to-many',
      inverseSide: 'song',
      joinColumn: true
    },
    genre: {
      target: 'Genre',
      type: 'many-to-one',
      inverseSide: 'genre',
      joinColumn: true
    }
  }
});
var _default = ArtistSchema;
exports["default"] = _default;