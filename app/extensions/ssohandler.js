define(function () {
  'use strict';

  return {
    name: 'ssohandler',
    initialize: function (application) {
      // Your brilliant code here!
      application.logger.log('Initializing extension: ssohandler');

      application.sandbox.isLoggedIn = function()  {
      	application.logger.log("Extension method called - presumably could be given context...");      
      }
    }
  };

});
