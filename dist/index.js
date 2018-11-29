'use strict';

require('url-search-params-polyfill');

var index = (function (data) {

  return new URLSearchParams(data);
});

module.exports = index;
