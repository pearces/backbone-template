"use strict";

app.Router = Backbone.Router.extend({
  routes: {
    "": "default"
  },

  // default route
  default: function() {
    var view = new app.AppView();
    view.render();
  },

  navigate: function(fragment, options) {
    options = (options || { trigger: true });
    return Backbone.Router.prototype.navigate.call(this, fragment, options);
  }
});
