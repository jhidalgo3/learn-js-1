require.config({
  paths: {
    jquery: '../public/js/libs/jquery/jquery-min',
    underscore: '../public/js/libs/underscore/underscore-min',
    backbone: '../public/js/libs/backbone/backbone-optamd3-min',
    text: '../public/js/libs/require/text',
    store: '../public/js/libs/backbone/localstorage',    	
    
    
    
    todoList: '../public/js/collections/todos',
    modelsTodo: '../public/js/models/todo',
    viewsTodo: '../public/js/views/todos'
  }

});

require(
['backbone','store','src/aboutEvents','src/hello_spec','src/aboutCollections','src/aboutModels','src/aboutViews'], 
function(Backbone,Store){
	
	
    var env = jasmine.getEnv()
    env.addReporter(new jasmine.HtmlReporter)
    env.execute()
})