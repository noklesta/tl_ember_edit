EmberEdit.reopen({

  ViewOverlay: Ember.Object.extend({
    // HTML element
    element: null,

    // The Ember view that this overlay will highlight
    emberView: null
  })

});

