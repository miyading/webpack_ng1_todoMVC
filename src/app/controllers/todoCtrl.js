const angular = require('angular');

angular.module('todoApp')
  .controller('todoCtrl', ['$scope', function ($scope) {
    $scope.list = [{
      text: 'java',
      checkbox: false
    }, {
      text: 'javaScript',
      checkbox: true
    }];
    $scope.counter = $scope.list.length;
    $scope.isListContainItem = $scope.list.length !== 0;
    
    $scope.deleteItem = function (item) {
      let indexId = $scope.list.indexOf(item);
      $scope.list.splice(indexId, 1);
      $scope.reset();
    };
    
    $scope.msg = '';
    $scope.addItem = function (item) {
      $scope.list.push(item);
      $scope.reset();
    };
    
    $scope.reset = function () {
      $scope.msg = '';
    };
  }]);
