"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import { Buffer } from 'buffer';

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    // const { token } = JSON.parse(Buffer.from(ctx.cookies.get('koa:sess'), 'base64').toString('ascii'));
    // console.log(token);
    yield next();
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();