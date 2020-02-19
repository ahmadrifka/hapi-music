"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./landing/index"));

var _artist = _interopRequireDefault(require("../routes/artist.route"));

var _genre = _interopRequireDefault(require("../routes//genre.route"));

var _login = _interopRequireDefault(require("../routes/login.route"));

var routes = [].concat(_index["default"], _artist["default"], _genre["default"], _login["default"]);
var _default = routes;
exports["default"] = _default;