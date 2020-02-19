"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _login = _interopRequireDefault(require("../services/login.service"));

var validate =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(request, username, password, session) {
    var user, sessionUser, isValid, credentials;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _login["default"]().findByUsername(username);

          case 2:
            user = _context.sent;
            sessionUser = user.id == session.id;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              credentials: null,
              isValid: false
            });

          case 6:
            _context.next = 8;
            return new _login["default"]().validatePassword(password, user.password);

          case 8:
            isValid = _context.sent;
            credentials = {
              id: user.id,
              name: user.username
            };
            return _context.abrupt("return", {
              isValid: isValid,
              credentials: credentials
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validate(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _default = validate;
exports["default"] = _default;