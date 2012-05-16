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

    editView: function() {
      var view = this.get('emberView'),
          matches = view.toString().match(/subclass of (.+)\):/),
          viewClass = matches[1];

      $.ajax({
        url: 'tl_ember_edit/view',
        data: {cls: viewClass},
        error: function() {
          alert('Unable to open file for ' + viewClass);
        }
      });
    },

    editTemplate: function() {
      var view = this.get('emberView'),
          template = view.templateName;

      if(!template) return;

      $.ajax({
        url: 'tl_ember_edit/template',
        data: {tpl: template},
        error: function() {
          alert('Unable to open file for ' + template);
        }
      });
    },

    showParentView: function() {
    },

    showChildViews: function() {
    },

    onMouseOver: function() {
      TlEmberEdit.ViewOverlay.selectedView = this;
    },

    onMouseOut: function() {
      TlEmberEdit.ViewOverlay.selectedView = null;
    },

    ////////////
    // private
    ////////////

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
      var view = this.get('emberView'), matches, infoText, templateName, infoBox;

      matches = view.toString().match(/subclass of (.+)\):(.+)>/);
      infoText = Ember.String.fmt('%@ <span class="ee-view-id">(%@)</span>', [matches[1], matches[2]]);

      templateName = view.get('templateName');
      if(templateName) {
        infoText += ' [' + templateName + ']';
      }

      infoBox = $('<div/>', {id: elm.attr('id') + '-overlay-info'})
      .addClass('ee-infobox')
      .css({
        left:    position.left,
        top:     position.top + height
      })
      .html(infoText)
      .appendTo(TlEmberEdit.bodyOverlay);

      this.set('infoBoxElm', infoBox);
    }
  })

});

TlEmberEdit.ViewOverlay.reopenClass({
  onMouseOver: function() {
    $('#' + this.id + '-info').show();
    $(this).data('overlayObj').onMouseOver();
  },

  onMouseOut: function() {
    $('#' + this.id + '-info').hide();
    $(this).data('overlayObj').onMouseOut();
  }
});