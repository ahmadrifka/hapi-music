"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _song = _interopRequireDefault(require("../model//song.model"));

var SongService =
/*#__PURE__*/
function () {
  function SongService() {
    (0, _classCallCheck2["default"])(this, SongService);
  }

  (0, _createClass2["default"])(SongService, [{
    key: "songRepository",
    value: function songRepository() {
      return (0, _typeorm.getRepository)(_song["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.songRepository().find();
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.songRepository().findOne(id);
    }
  }, {
    key: "findSongByArtistId",
    value: function findSongByArtistId(Artistid) {
      return this.songRepository().findOne({
        Artistid: Artistid
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.songRepository().save(data);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.songRepository.update(data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.songRepository()["delete"](id);
    }
  }]);
  return SongService;
}();

exports["default"] = SongService;