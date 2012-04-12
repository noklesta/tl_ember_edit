TlEmberEdit.reopen({

  ViewOverlay: Ember.Object.extend({

    // HTML element of the ember view that this overlay will highlight
    emberViewElm: null,

    // The Ember view that this overlay will highlight
    emberView: null,

    // The overlay element we create for the Ember view
    overlayElm: null,

    // The info box that is displayed below the overlay
    infoBoxElm: null,

    init: function() {
      var elm      = this.get('emberViewElm'),
          position = elm.position(),
          width    = elm.width(),
          height   = elm.height();

      this._createOverlay(elm, position, width, height);
      this._createInfoBox(elm, position, width, height);
    },

    _createOverlay: function(elm, position, width, height) {
      var overlay = $('<div/>', {id: elm.attr('id') + '-overlay'})
      .addClass('ee-view-overlay')
      .css({
        left:   position.left,
        top:    position.top,
        width:  width,
        height: height
      })
      .data('overlayObj', this)
      .appendTo(TlEmberEdit.bodyOverlay);

      this.set('overlayElm', overlay);
    },

    _createInfoBox: function(elm, position, width, height) {
      var infoBox = $('<div/>', {id: elm.attr('id') + '-overlay-info'})
      .addClass('ee-infobox')
      .css({
        left:    position.left,
        top:     position.top + height
      })
      .html('aaa')
      .appendTo(TlEmberEdit.bodyOverlay);

      this.set('infoBoxElm', infoBox);
    }
  })

});

TlEmberEdit.ViewOverlay.reopenClass({
  onMouseOver: function() {
    $('#' + this.id + '-info').show();
  },

  onMouseOut: function() {
    $('#' + this.id + '-info').hide();
  }
});