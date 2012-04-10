window.EmberEdit = Ember.Namespace.create({

  // Keyboard shortcuts. You can override these in your own
  // JavaScript code at any time.
  KEYS: {
    activate: {
      key:  'e',
      alt:  true,
      ctrl: true
    },

    showView: {
      key: 'v'
    },

    showTemplate: {
      key: 't'
    },

    showParentView: {
      key: 'p'
    },

    showChildViews: {
      key: 'c'
    }
  }
});