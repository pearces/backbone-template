"use strict";

app.AppView = Backbone.View.extend({
  el: '#content',
  template: app.jst.app_view,
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
