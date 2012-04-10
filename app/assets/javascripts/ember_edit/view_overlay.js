EmberEdit.reopen({

  ViewOverlay: Ember.Object.extend({

    // HTML element of the ember view that this overlay will highlight
    emberViewElm: null,

    // The Ember view that this overlay will highlight
    emberView: null,

    // The overlay element we create for the Ember view
    overlayElm: null,

    init: function() {
      var elm = this.get('emberViewElm'),
          position = elm.position();

      var overlay = $('<div/>').addClass('ee-view-overlay').css({
        left:   position.left,
        top:    position.top,
        width:  elm.css('width'),
        height: elm.css('height')
      }).appendTo(document.body);

      this.set('overlayElm', overlay);
    }
  })

});

