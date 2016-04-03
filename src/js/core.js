(function(app) {
  // global object
  var root = (typeof window == 'object' && window) || global;

  // app instance
  root.app = app();

  // libraries
  root.$ = root.$ || require('jquery');
  root._ = root._ || require('underscore');
  root.Backbone = root.Backbone || require('backbone');
})(function() {
  return {}; // initial app container
});
