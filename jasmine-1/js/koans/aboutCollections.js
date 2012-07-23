describe('About Backbone.Collection', function() {
    it('Can add Model instances as objects and arrays.', function() {
        var todos = new TodoList();
        
        expect(todos.length).toBe(0);
        
        todos.add({ text: 'Clean the kitchen' });
        
        expect(todos.length).toBe(1);
        
        todos.add([
            { text: 'Do the laundry', done: true }, 
            { text: 'Go to the gym'}
        ]);
        
        expect(todos.length).toBe(3);
    });
    
    it('Can have a url property to define the basic url structure for all contained models.', function() {
        var todos = new TodoList();
        
        expect(todos.url).toBe('/todos/');
    });
    
    it('Fires custom named events when the models change.', function() {
        var todos = new TodoList();
        
        var addModelCallback = jasmine.createSpy('-add model callback-');
        todos.bind('add', addModelCallback);
        todos.trigger('add')
        // How would you get the 'add' event to trigger?
        
        expect(addModelCallback).toHaveBeenCalled();
        
        var removeModelCallback = jasmine.createSpy('-remove model callback-');
        todos.bind('remove', removeModelCallback);
        
        // How would you get the 'remove' callback to trigger?
        todos.trigger('remove')

        expect(removeModelCallback).toHaveBeenCalled();
    });
});