'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:testProject
 * @description
 * # testProject
 */
angular.module('testApp')
  .directive('testProject', function () {
    return {
      templateUrl: 'views/directives/test-project.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        //1
        var str = "abcdefg";
        if(/efg/.test(str)){
          scope.str = "scope.str ---->" + str.substr(str.indexOf('efg'), 3);
        }

        //2
        scope.string = "kjdslakldjeioruenvmndkjhgfkljdjeiorw";
        var string = scope.string,obj = {}, max = {
          key: '',
          value: ''
        };
        for(var i=0; i<string.length; i++){
          if(!obj[string[i]]){
            obj[string[i]] = 1;
          }else {
            obj[string[i]]++;
          }
        }
        for(var key in obj){
          if(max.value < obj[key]){
            max.key = key;
            max.value = obj[key];
          }
        }
        scope.max = max;

        //3
        var arr = ['red','green','blue','blue','yellow','blue','red'];
        scope.arr = ['red','green','blue','blue','yellow','blue','red'];
        obj = {};
        for(i=0; i<arr.length; ){
          if(!obj[arr[i]]) {
            obj[arr[i]] = 1;
            i++;
          }else{
            arr.splice(i, 1);
          }
        }
        scope.arr_new = arr;
        //拓展
        if(Object.prototype.toString.call(arr) == "[object Array]"){
          console.log('is Array');
        }

        //6
        var str1 = "dddd";
        var str2 = new String('dddd');
        function isString(str){
          return (typeof str == "String" || str.constructor == String);
        }
        console.log(isString(str1));
        console.log(isString(str2));
      }
    };
  });
