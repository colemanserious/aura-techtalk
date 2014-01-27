define(['underscore'], function (_) {
  'use strict';

  return {

    initialText: '',
    changeCount: 0,

    initialize: function () {
      this.initialText = this.$el.html();
      this.$el.on('click', _.bind(this.someCoolFeature, this));
      this.render();

      this.sandbox.on( 'shouted', this.shouterHandler, this); 
    },

    render: function () {
      //Place render logic here
      this.$el.html('Click me: ' + this.$el.html());
    },

    someCoolFeature: function () {
      //Awesome code
      var element = this.$el;
      element.fadeOut(200, function () {
        element.fadeIn(200);
      });
    },

    shouterHandler: function(receivedShout) {
      if (this.changeCount % 2 == 0) {
        this.$el.html(this.initialText);
      } else {
        this.$el.html(receivedShout);
      };
      this.changeCount++;
    }
  };

});
