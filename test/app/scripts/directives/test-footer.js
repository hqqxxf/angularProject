'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:testFooter
 * @description
 * # testFooter
 */
angular.module('testApp')
  .directive('testFooter', function () {
    return {
      templateUrl: 'views/directives/test-footer.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
