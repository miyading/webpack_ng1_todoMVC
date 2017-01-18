const angular = require('angular');

angular.module('todoApp')
  .directive('todoItem', function () {
    return {
      restrict: 'E',
      scope: {
        list: '=',
        delete: '&onDelete'
      },
      template: require('../templates/theTodo/todo-item.html')
    };
  });
