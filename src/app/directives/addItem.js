const angular = require('angular');

angular.module('todoApp')
  .directive('addItem', function () {
    return {
      restrict: 'E',
      scope: {
        msg: '=',
        add: '&onAdd',
        reset: '&onReset'
      },
      template: require('../templates/theTodo/add-item.html')
    };
  });
