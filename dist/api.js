"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var _index = _interopRequireDefault(require("./routes/index"));

var _config = _interopRequireDefault(require("./config"));

var _connection = _interopRequireDefault(require("./db/connection"));

var _auth = _interopRequireDefault(require("./config/auth"));

process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});

var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var connection, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _config["default"])();
          _context.next = 3;
          return (0, _connection["default"])();

        case 3:
          connection = _context.sent;
          server = _hapi["default"].server({
            port: process.env.APP_PORT,
            host: process.env.APP_HOST
          });
          _context.next = 7;
          return server.register(require('@hapi/basic'));

        case 7:
          _context.next = 9;
          return server.register(require('@hapi/cookie'));

        case 9:
          server.state('session', {
            ttl: 1000 * 60 * 60 * 24,
            // 1 day lifetime
            encoding: 'base64json' // cookie data is JSON-stringified and Base64 encoded

          });
          _context.next = 12;
          return server.auth.strategy('simple', 'basic', {
            validate: _auth["default"]
          });

        case 12:
          _context.next = 14;
          return server.route(_index["default"]);

        case 14:
          if (!connection.isConnected) {
            _context.next = 19;
            break;
          }

          _context.next = 17;
          return server.start();

        case 17:
          console.log("Database connection name ".concat(process.env.DB_NAME));
          console.log('Server', process.env.APP_NAME, "running on ".concat(server.info.uri));

        case 19:
          return _context.abrupt("return", server.listener);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;