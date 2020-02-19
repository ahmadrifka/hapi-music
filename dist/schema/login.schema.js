"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _login = _interopRequireDefault(require("../model/login.model"));

var LoginSchema = new _typeorm.EntitySchema({
  name: 'Login',
  target: _login["default"],
  tableName: 'login',
  columns: {
    id: {
      type: 'int',
      generated: true,
      unique: true,
      nullable: false,
      primary: true
    },
    username: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    password: {
      type: 'varchar',
      length: 255,
      nullable: false
    }
  }
});
var _default = LoginSchema;
exports["default"] = _default;