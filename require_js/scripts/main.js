requirejs.config({
  
  /**s
   * HACK:
   * Modified Underscore and Backbone to be AMD compatible (define themselves)
   * since it didn't work properly with the RequireJS shim when optimizing
   */
  paths: {
    'jquery'           : 'jquery',
    //'jquery.alpha' : 'jquery.alpha',
   // 'jquery.beta' : 'jquery.beta',
    'App' : 'app'
  }
});

require(['App'], function(App, Client) {
  App.initialize();
});
