//= require ember_edit/core
//= require ember_edit/view_overlay

$(function() {
  // Handle keyboard events. Attaching the handler to document.documentElement
  // makes it work across all browsers
  // (see http://jqueryfordesigners.com/adding-keyboard-navigation/).
  $(document.documentElement).on('keydown', function(e) {
    var hotkey = EmberEdit.KEYS.activate;
    var keyCode = hotkey.key.toUpperCase().charCodeAt(),
        ctrl    = hotkey.ctrl,
        alt     = hotkey.alt,
        shift   = hotkey.shift;

    if(e.which === keyCode &&
      (!ctrl || e.ctrlKey) && (!alt || e.altKey) && (!shift || e.shiftKey)) {
      EmberEdit.activate();
    }
  });
});

EmberEdit.reopen({
  activate: function() {
    if(this.bodyOverlay) return;

    this._createBodyOverlay();
    this._createViewOverlays();
    this._setupEventHandlers();
  },

  deactivate: function() {
    this._removeEventHandlers();
    this._destroyViewOverlays();
    this._destroyBodyOverlay();
  },

  // Private methods

  _createBodyOverlay: function() {
    this.bodyOverlay = $('<div/>').addClass('ee-body-overlay').appendTo('body');
  },

  _createViewOverlays: function() {
    // Ember.View.views is an object that contains those views that currently
    // exist in the DOM (excluding, for instance, views inside an #if block that
    // currently evaluates to false). So, in order to highlight the currently
    // displayed views, we get the Ember.View.views object each time we activate
    // the ember_edit functionality.
    this.views = Ember.View.views;

    var views = this.views;
    this.viewOverlays = $.map($('.ember-view[id]'), function(elm) {
      var obj = EmberEdit.ViewOverlay.create({
        emberViewElm: $(elm),
        emberView: views[elm.id]
      });
    });
  },

  _setupEventHandlers: function() {
    this.bodyOverlay.on('mouseover', '.ee-view-overlay', EmberEdit.ViewOverlay.onMouseOver);
    this.bodyOverlay.on('mouseout',  '.ee-view-overlay', EmberEdit.ViewOverlay.onMouseOut);
  }
});
