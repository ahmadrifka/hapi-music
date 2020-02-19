"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _artist = _interopRequireDefault(require("../model/artist.model"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var ArtistService =
/*#__PURE__*/
function () {
  function ArtistService() {
    (0, _classCallCheck2["default"])(this, ArtistService);
  }

  (0, _createClass2["default"])(ArtistService, [{
    key: "artistRepository",
    value: function artistRepository() {
      return (0, _typeorm.getRepository)(_artist["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.artistRepository().find({
        relations: ['genre']
      });
    }
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.artistRepository().findOne(id);

              case 2:
                data = _context.sent;

                if (data) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", _boom["default"].notFound('Artist Not Found!'));

              case 5:
                return _context.abrupt("return", data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "findArtistByGenreId",
    value: function findArtistByGenreId(GenreId) {
      var artist = this.artistRepository().find({
        genre: GenreId
      });
      return artist;
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.artistRepository().save(data);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.artistRepository().update(data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var data = this.findById(id);
      return this.artistRepository()["delete"](data);
    }
  }]);
  return ArtistService;
}();

exports["default"] = ArtistService;