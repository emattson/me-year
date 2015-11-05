'use strict';
var App    = require('../lib/me-year');

describe('me-year', function() {

  before(function() {
  });

  after(function() {
  });

  beforeEach(function() {
  });

  afterEach(function() {
  });

  it('Should be awesome', function(done) {
    var app = new App();
    var result = app.execute();
	result.should.eql('awesome');
    done();
  });

});
