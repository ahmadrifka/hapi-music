"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _genre = _interopRequireDefault(require("../services/genre.service"));

var genreService = new _genre["default"]();
var genreRoute = [{
  method: 'GET',
  path: '/genre',
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
              return genreService.findAll();

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
}, {
  method: 'GET',
  path: '/genre/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request) {
      var id;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = request.params.id;
              _context2.next = 3;
              return genreService.findOne(id);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
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
  method: 'POST',
  path: '/genre/',
  handler: function handler(request) {
    var data = request.payload;
    genreService.create(data);
    return data;
  }
}, {
  method: 'PUT',
  path: '/genre/{id}',
  handler: function () {
    var _handler3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(request) {
      var data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return genreService.findOne(request.params.id);

            case 2:
              data = _context3.sent;
              data.update(request.payload.data);
              return _context3.abrupt("return", data.save());

            case 5:
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
  method: 'DELETE',
  path: '/genre/{id}',
  handler: function handler(request) {
    var id = request.params.id;
    return genreService["delete"](id);
  }
}];
var _default = genreRoute;
exports["default"] = _default;