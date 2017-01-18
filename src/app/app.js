const angular = require('angular');
require('angular-route');

angular.module('todoApp', ['ngRoute'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: require('./templates/theTodo/home.html'),
          controller: 'todoCtrl',
          controllerAs: 'todo'
        })
        .otherwise({
          template: require('./templates/common/404.html')
        });
    }
  ]);