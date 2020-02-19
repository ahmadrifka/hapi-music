"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _genre = _interopRequireDefault(require("../model/genre.model"));

var GenreSchema = new _typeorm.EntitySchema({
  name: 'Genre',
  target: _genre["default"],
  tableName: 'genre',
  columns: {
    id: {
      type: 'int',
      generated: 'increment',
      unique: true,
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
      length: 255,
      nullable: false
    }
  },
  relations: {
    artist: {
      target: 'Artist',
      type: 'one-to-many',
      inverseSide: 'artist',
      joinColumn: true
    }
  }
});
var _default = GenreSchema;
exports["default"] = _default;