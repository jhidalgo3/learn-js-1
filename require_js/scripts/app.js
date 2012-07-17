define('App', [
  'jquery','jquery.alpha', 'jquery.beta'
], function($) {

  function initialize() {
      $(function() {
        console.log ('OK')
        $('body').alpha().beta()
    });
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
