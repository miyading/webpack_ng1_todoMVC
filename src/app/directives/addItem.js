var angular = require('angular');

angular.module('trCheckApp')
  .directive('addItem', function () {
    return {
      restrict: 'E',
      scope: {
        msg: '@',
        add: '&onAdd'
      },
      template: require('../templates/theTodo/add-item.html')
    };
  });
