'use strict';

describe('Directive: testHeader', function () {

  // load the directive's module
  beforeEach(module('testApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<test-header></test-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testHeader directive');
  }));
});
