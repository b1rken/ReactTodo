var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
    }

    return $.isArray(todos) ? todos : [];
  },

  filteredTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by serachText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();

      // if (searchText.length === 0) {
      //   return 1;
      // } else {
      //
      //   if (text.indexOf(searchText) > -1) {
      //     alert('hi');
      //     return 1;
      //   } else {
      //     return 0;
      //   }
      // }

      return searchText.length === 0 || text.indexOf(searchText) > -1;

    });

    // Sort todos with non-completed on the top
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed ) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }

};
