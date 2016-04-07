"use strict";

app.Router = Backbone.Router.extend({
  routes: {
    "": "default"
  },

  // default route
  default: function() {
    var view = new app.AppView({ model: new app.AppModel(), collection: new app.AppModels() });
    app.renderFetch(view);
    // models/collections can be fetch as well: app.fetchRender(view, view.model, view.collection, ...);
  },

  navigate: function(fragment, options) {
    options = (options || { trigger: true });
    return Backbone.Router.prototype.navigate.call(this, fragment, options);
  }
});
