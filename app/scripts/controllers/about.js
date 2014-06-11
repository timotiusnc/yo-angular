'use strict';

/**
 * @ngdoc function
 * @name mytodosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodosApp
 */
angular.module('mytodosApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.todos = [];
  }]);
