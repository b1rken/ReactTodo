var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({


  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Buy Groceries'
        },
        {
          id: 3,
          text: 'Pick up the mail'
        },
        {
          id: 4,
          text: 'Buy cat food'
        },
        {
          id: 5,
          text: 'Fix the garage'
        },
        {
          id: 6,
          text: 'Buy new Microsoft Software'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
