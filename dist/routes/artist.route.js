"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _artist = _interopRequireDefault(require("../services/artist.service"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var artistService = new _artist["default"]();
var artistRoute = [{
  method: 'GET',
  path: '/artist',
  config: {
    // auth: 'simple',
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(request, h) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return artistService.findAll();

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handler(_x, _x2) {
        return _handler.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'GET',
  path: '/artist/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request) {
      var id, find;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = request.params.id;
              _context2.next = 3;
              return artistService.findById(id);

            case 3:
              find = _context2.sent;
              return _context2.abrupt("return", find);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function handler(_x3) {
      return _handler2.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'GET',
  path: '/artist/genre/{id}',
  handler: function () {
    var _handler3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(request) {
      var id, find;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = request.params.id;
              _context3.next = 3;
              return artistService.findArtistByGenreId(id);

            case 3:
              find = _context3.sent;

              if (find) {
                _context3.next = 8;
                break;
              }

              throw _boom["default"].notFound('Artist not Found!');

            case 8:
              return _context3.abrupt("return", find);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function handler(_x4) {
      return _handler3.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'POST',
  path: '/artist',
  config: {
    handler: function handler(request) {
      var data = request.payload;
      artistService.create(data);
      return data;
    },
    validate: {
      payload: {
        name: _joi["default"].string().max(100).required(),
        picture: _joi["default"].string().max(255).required()
      }
    }
  }
}, {
  method: 'PUT',
  path: '/artist/{id}',
  handler: function () {
    var _handler4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(request) {
      var data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return artisService.findOne(request.params.id);

            case 2:
              data = _context4.sent;
              data.update(request.payload.data);
              return _context4.abrupt("return", data.save());

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function handler(_x5) {
      return _handler4.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'DELETE',
  path: '/artist/{id}',
  handler: function handler(request) {
    var id = request.params.id;
    return artistService["delete"](id);
  }
}];
var _default = artistRoute;
exports["default"] = _default;