'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:testHeader
 * @description
 * # testHeader
 */
angular.module('testApp')
  .directive('testHeader', function () {
    return {
      templateUrl: 'views/directives/test-header.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
          console.log(scope);
      }
    };
  });
