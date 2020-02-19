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

var _login2 = _interopRequireDefault(require("../model/login.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var LoginService =
/*#__PURE__*/
function () {
  function LoginService() {
    (0, _classCallCheck2["default"])(this, LoginService);
  }

  (0, _createClass2["default"])(LoginService, [{
    key: "loginRepository",
    value: function loginRepository() {
      return (0, _typeorm.getRepository)(_login2["default"]);
    }
  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loginRepository().find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loginRepository().findOne(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "findByUsername",
    value: function () {
      var _findByUsername = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(username) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loginRepository().findOne({
                  username: username
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findByUsername(_x2) {
        return _findByUsername.apply(this, arguments);
      }

      return findByUsername;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(data) {
        var password;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                password = data.password;
                console.log('before', password);
                _context4.next = 4;
                return this.generatePassword(password);

              case 4:
                data.password = _context4.sent;
                return _context4.abrupt("return", this.loginRepository().save(data));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function create(_x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.loginRepository()["delete"](id);
    }
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(data, req) {
        var username, password, user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                username = data.username, password = data.password;
                _context5.next = 3;
                return this.findByUsername(username);

              case 3:
                user = _context5.sent;
                console.log(password);
                console.log(user.password);
                console.log(user);
                req.cookieAuth.set({
                  id: user.id
                });
                console.log(req);
                _context5.t0 = user;

                if (!_context5.t0) {
                  _context5.next = 14;
                  break;
                }

                _context5.next = 13;
                return this.validatePassword(password, user.password);

              case 13:
                _context5.t0 = _context5.sent;

              case 14:
                if (!_context5.t0) {
                  _context5.next = 18;
                  break;
                }

                return _context5.abrupt("return", user);

              case 18:
                throw _boom["default"].unauthorized('Invalid Username or Password');

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function login(_x4, _x5) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "generatePassword",
    value: function () {
      var _generatePassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(password) {
        var salt;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                salt = _bcryptjs["default"].genSaltSync();
                return _context6.abrupt("return", _bcryptjs["default"].hashSync(password, salt));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function generatePassword(_x6) {
        return _generatePassword.apply(this, arguments);
      }

      return generatePassword;
    }()
  }, {
    key: "validatePassword",
    value: function () {
      var _validatePassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(password, checkpassword) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _bcryptjs["default"].compareSync(password, checkpassword));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function validatePassword(_x7, _x8) {
        return _validatePassword.apply(this, arguments);
      }

      return validatePassword;
    }()
  }]);
  return LoginService;
}();

exports["default"] = LoginService;