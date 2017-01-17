var angular = require('angular');
require('angular-route');

angular.module('trCheckApp', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
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
    ])
    .controller('todoCtrl', ['$scope', function($scope) {
        $scope.list = [{
            isCompleted: false,
            text: 'java',
            checkbox: false
        }, {
            isCompleted: false,
            text: 'javaScript',
            checkbox: true
        }];
        $scope.counter = $scope.list.length;
        $scope.isListContainItem = $scope.list.length !== 0;

        $scope.deleteItem = function(item) {
            var indexId = $scope.list.indexOf(item);
            $scope.list.splice(indexId, 1);
            $scope.counter = $scope.list.length;
        };

        $scope.msg = '';
        $scope.addItem = function(item) {
            $scope.list.push(item);
            $scope.counter = $scope.list.length;
        };

    }]);
