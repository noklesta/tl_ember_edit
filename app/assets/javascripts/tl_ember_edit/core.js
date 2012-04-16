window.TlEmberEdit = Ember.Namespace.create({

  // Keyboard shortcuts. You can override these in your own JavaScript code at
  // any time. (I use modifier keys for all shortcuts to avoid conflict with
  // the Vimium extension for Chrome - you might not need that.)
  KEYS: {
    activate: {
      key:  'e',
      ctrl: true,
      alt:  true
    },

    editView: {
      key: 'v',
      ctrl: true
    },

    editTemplate: {
      key: 't',
      ctrl: true
    },

    showParentView: {
      key: 'p',
      ctrl: true
    },

    showChildViews: {
      key: 'c',
      ctrl: true
    }
  },

  // Translates the info for a keyboard shortcut from the human-friendly format
  // in KEYS to a format that is more conventient for the program.
  getHotkey: function(task) {
    var hotkey = TlEmberEdit.KEYS[task];
    return {
         keyCode: hotkey.key.toUpperCase().charCodeAt(),
         ctrl:    !!hotkey.ctrl,
         alt:     !!hotkey.alt,
         shift:   !!hotkey.shift
       };
   }

});