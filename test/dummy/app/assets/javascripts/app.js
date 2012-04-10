window.App = Ember.Application.create({
  ready: function() {
    App.bandsController.set(
      'content', [{
        name: 'The Mars Volta',
        country: 'USA',
        url: 'http://www.themarsvolta.com'
      }, {
        name: 'Madder Mortem',
        country: 'Norway',
        url: 'http://www.myspace.com/maddermortem'
      }, {
        name: 'Pain of Salvation',
        country: 'Sweden',
        url: 'http://www.painofsalvation.com'
      }]
    );
  }
});