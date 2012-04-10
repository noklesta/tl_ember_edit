//= require ember_edit/core
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
    if(EmberEdit.overlay) return;

    // Ember.View.views is an object that contains those views that currently
    // exist in the DOM (excluding, for instance, views inside an #if block that
    // currently evaluates to false). So, in order to highlight the currently
    // displayed views, we get the Ember.View.views object each time we activate
    // the ember_edit functionality.
    EmberEdit.views = Ember.View.views;

    var createOverlay = function() {
      EmberEdit.overlay = $('<div/>').css({
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.3
      }).appendTo('body');
    };

    createOverlay();
  }
});
