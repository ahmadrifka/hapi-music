"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _song = _interopRequireDefault(require("../model/song.model"));

var SongSchema = new _typeorm.EntitySchema({
  name: 'Song',
  target: _song["default"],
  tableName: 'song',
  columns: {
    id: {
      type: 'int',
      unique: true,
      generated: 'increment',
      nullable: false,
      primary: true
    },
    title: {
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
      type: 'many-to-one',
      inverseSide: 'artist',
      JoinColumn: true
    }
  }
});
var _default = SongSchema;
exports["default"] = _default;