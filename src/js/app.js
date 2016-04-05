"use strict";

(function() {
  // global object
  var root = (typeof window == 'object' && window) || global;

  // app instance
  root.app = app;

  // app initialization
  app.router = new app.Router();
  Backbone.history.start({ pushState: true });
})();
