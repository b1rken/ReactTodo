var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({


  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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

  handleAddTodo: function (text) {
    alert('New todo added: ' + text);

  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
