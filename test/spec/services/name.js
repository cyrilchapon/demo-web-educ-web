'use strict';

describe('Service: nameSrv', function () {

  // load the service's module
  beforeEach(module('demoWebEducWebApp'));

  // instantiate service
  var nameSrv;
  beforeEach(inject(function (_nameSrv_) {
    nameSrv = _nameSrv_;
  }));

  it('should do something', function () {
    expect(!!nameSrv).toBe(true);
  });

});
