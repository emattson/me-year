/*
 * me-year
 * https://github.com/emattson/me-year
 *
 * Copyright (c) 2015 Eli Mattson
 * Licensed under the MIT license.
 */

'use strict';

var App = function() {
  var execute = function() {
    return 'awesome';
  };
 
  return Object.freeze({
    execute: execute
  });
};

module.exports = App;
