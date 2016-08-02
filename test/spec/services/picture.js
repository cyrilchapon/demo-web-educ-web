'use strict';

describe('Service: pictureSrv', function () {

  // load the service's module
  beforeEach(module('demoWebEducWebApp'));

  // instantiate service
  var pictureSrv;
  beforeEach(inject(function (_pictureSrv_) {
    pictureSrv = _pictureSrv_;
  }));

  it('should do something', function () {
    expect(!!pictureSrv).toBe(true);
  });

});
