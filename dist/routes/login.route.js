"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _login = _interopRequireDefault(require("../services/login.service"));

var loginService = new _login["default"]();
var loginRoute = [{
  method: 'GET',
  path: '/login',
  options: {
    auth: 'simple',
    state: {
      parse: true,
      failAction: 'error'
    },
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, h) {
        var cookie, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cookie = req.state.session;

                if (!cookie) {
                  cookie = {
                    username: 'admin',
                    firstVisit: false
                  };
                }

                cookie.lastVisit = Date.now();
                _context.next = 5;
                return loginService.findAll();

              case 5:
                data = _context.sent;
                console.log(cookie);
                return _context.abrupt("return", h.response(data).state('session', cookie));

              case 8:
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
  method: 'POST',
  path: '/login/new',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request) {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = request.payload;
              loginService.create(data);
              return _context2.abrupt("return", data);

            case 3:
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
  method: 'DELETE',
  path: '/login/{id}',
  handler: function handler(request) {
    var data = request.params.id;
    return loginService["delete"](data);
  }
}, {
  method: 'POST',
  path: '/login',
  config: {
    handler: function handler(request, h) {
      loginService.login(request.payload, request);
      return h.redirectTo('/login');
    }
  }
}, {
  method: 'GET',
  path: '/logout',
  config: {
    // auth: 'session',
    handler: function handler(request) {
      request.cookieAuth.clear();
      return 'Cookie cleared';
    }
  }
}];
var _default = loginRoute;
exports["default"] = _default;