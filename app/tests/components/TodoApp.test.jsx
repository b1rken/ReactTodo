var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    it('should exist', () => {
      expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
      var todoText = 'Test Text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

      todoApp.setState({
        todos: []
      });

      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(todoText);

      // Expect createdAt to be a number
      expect(todoApp.state.todos[0].createdAt).toBeA('number');

    });

    it('should toggle completed value when handleToggle i called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      };

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      // Check taht the first todos item has completed value of false
      expect(todoApp.state.todos[0].completed).toBe(false);
      // call handleToggle with 11
      todoApp.handleToggle(11);
      // Verify that value changed
      expect(todoApp.state.todos[0].completed).toBe(true);

      // Expect completedAt to be a number
      expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });


    // Test that when toggle form true to flase, compeltedAt get removed
    it('should toggle todo from completed to incompleted, and remove completedAt number/date', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: true,
        createdAt: 0,
        completedAt: 60
      };

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].completed).toBe(true);
      todoApp.handleToggle(11);
      expect(todoApp.state.todos[0].completed).toBe(false);


      // Expect completedAt to be a number
      expect(todoApp.state.todos[0].completedAt).toNotExist();
    });

});
