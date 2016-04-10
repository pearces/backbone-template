"use strict";

// core libraries
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

if (!global.app) {
  global.app = {};
}
var app = global.app; // initial app container

module.exports = app; // export the app
