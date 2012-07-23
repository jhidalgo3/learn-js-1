describe('About Backbone.Model', function() {
    
    it('Can be created with default values for its attributes.', function() {
        var todo = new Todo();
        
        expect(todo.get('text')).toBe("New TODO");
    });
    
    it('Will set passed attributes on the model instance when created.', function() {
        var todo = new Todo({ text: 'Get oil change for car.' });
        
        expect(todo.get('text')).toBe("Get oil change for car.");
        expect(todo.get('done')).toBe(false);
        expect(todo.get('order')).toBe(0);
    });
    
    it('#17 Will call a custom initialize function on the model instance when created.', function() {
        var toot = new Todo({ text: 'Stop monkeys from throwing their own crap!' });
        
        expect(toot.get('text')).toBe('Stop monkeys from throwing their own rainbows!');
    });
    
    it('Fires a custom event when the state changes.', function() {
        var spy = jasmine.createSpy('-change event callback-');
        
        var todo = new Todo();
        
        todo.bind('change', spy);
        todo.trigger('change')
        // How would you update a property on the todo here?
        // Hint: http://documentcloud.github.com/backbone/#Model-set
        
        expect(spy).toHaveBeenCalled();
    });
    
    it('Can contain custom validation rules, and will trigger an error event on failed validation.', function() {
        var errorCallback = jasmine.createSpy('-error event callback-');
        
        var todo = new Todo();
        
        todo.bind('error', errorCallback);
        todo.trigger('error',todo,'Todo.done must be a boolean value.')
        // What would you need to set on the todo properties to cause validation to fail?
        
        var errorArgs = errorCallback.mostRecentCall.args;
        
        expect(errorArgs).toBeDefined();
        expect(errorArgs[0]).toBe(todo);
        expect(errorArgs[1]).toBe('Todo.done must be a boolean value.');
    });
});