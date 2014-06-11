'use strict';

/**
 * @ngdoc function
 * @name mytodosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodosApp
 */
angular.module('mytodosApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    
    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos.length', function() {
      localStorageService.add('todos', $scope.todos.join('\n'));
    });
    
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  }]);
