require.config({
  paths: {
    eventemitter: 'bower_components/eventemitter2/lib/eventemitter2',
    aura: 'bower_components/aura/lib',
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore'
  }
});

require(['aura/aura'], function (Aura) {
  'use strict';

  var app = new Aura( { debug: {enable: true }});
  app.components.addSource('todo', 'http://localhost:9080/todomvc/app/aura_components'); // URL of components themselves - outcome: missing renderTemplate (provided by Aura)
  //app.components.addSource('todo', 'http://localhost:9080/todomvc');  // base URL - outcome: requireJS script error

  /*
  Add your extensions here.
  app.use('extensions/sample');
  */
  app.use( 'extensions/ssohandler');

  app.start({ components: 'body' }).then(function () {
    console.log('Aura started...');
  });
});
