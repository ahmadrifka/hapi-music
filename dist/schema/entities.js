"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _artist = _interopRequireDefault(require("./artist.schema"));

var _genre = _interopRequireDefault(require("./genre.schema"));

var _song = _interopRequireDefault(require("./song.schema"));

var _login = _interopRequireDefault(require("./login.schema"));

var _default = [_artist["default"], _genre["default"], _song["default"], _login["default"]];
exports["default"] = _default;