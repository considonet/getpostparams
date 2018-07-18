"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("url-search-params-polyfill");

exports.default = function (data) {

  return new URLSearchParams(data);
};