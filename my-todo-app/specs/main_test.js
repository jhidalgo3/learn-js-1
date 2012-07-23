require.config({
  paths: {
    jquery: '../public/js/libs/jquery/jquery-min',
    underscore: '../public/js/libs/underscore/underscore-min',
    backbone: '../public/js/libs/backbone/backbone-optamd3-min',
    text: '../public/js/libs/require/text'
  }

});

require(
['aboutEvents'], 
function(){
    var env = jasmine.getEnv()
    env.addReporter(new jasmine.HtmlReporter)
    env.execute()
})