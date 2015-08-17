'use strict';

/**
 * @ngdoc service
 * @name testApp.commonService
 * @description
 * # commonService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('commonService', function () {


    var commonService = null;
    commonService.alert = function(){
      alert(1);
    };
    return commonService;

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
