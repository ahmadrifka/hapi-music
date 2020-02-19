"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _genre = _interopRequireDefault(require("../model/genre.model"));

var GenreService =
/*#__PURE__*/
function () {
  function GenreService() {
    (0, _classCallCheck2["default"])(this, GenreService);
  }

  (0, _createClass2["default"])(GenreService, [{
    key: "genreRepository",
    value: function genreRepository() {
      return (0, _typeorm.getRepository)(_genre["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.genreRepository().find();
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.genreRepository().findOne(id);
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.genreRepository().save(data);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.genreRepository().update(data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.genreRepository()["delete"](id);
    }
  }]);
  return GenreService;
}();

exports["default"] = GenreService;