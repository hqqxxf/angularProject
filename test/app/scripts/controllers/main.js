'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.user = {
      username : "",
      phoneNumber : "",
      age : 0,
      password : ''
    }
  }]);
