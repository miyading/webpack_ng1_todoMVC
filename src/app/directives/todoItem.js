var angular = require('angular');

angular.module('trCheckApp')
    .directive('todoItem', function() {
        return {
            restrict: 'E',
            scope: {
                list: '=',
                delete: '&onDelete'
            },
            template: require('../templates/theTodo/todo-item.html')
        };
    });
