"use strict";

// render method for views
app.renderView = function(view) {
  if (app.view) {
    app.view.remove(); // remove the previous view
  }
  app.view = view.render();
};

// fetches any models or collections listed in the arguments and then renders the view
app.renderFetch = function(view) {
  var models = Array.prototype.slice.call(arguments, 1),
    done = _.partial(app.renderView, view),
    fetch = [];

  // find any empty models and add them to fetch list
  _.each(models, function(model) {
    if (model.isEmpty()) {
      fetch.push(model.fetch());
    }
  });

  // fetch any models/collections if required, then render
  if (fetch.length > 0) {
    $.when.apply(this, fetch).then(done, app.ajaxError);
  }
  else {
    done();
  }
};

// generic ajax error handler
app.ajaxError = function(xhr, status, error) {
  console.error(error); //TODO: render the message in the UI
};

(function() {
  // app initialization
  app.router = new app.Router();
  Backbone.history.start({ pushState: true });
})();
