'use strict';

describe('Service: commonService', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var commonService;
  beforeEach(inject(function (_commonService_) {
    commonService = _commonService_;
  }));

  it('should do something', function () {
    expect(!!commonService).toBe(true);
  });

});
