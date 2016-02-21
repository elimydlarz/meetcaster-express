var request = require('supertest');

describe('MeetCaster', function() {
  var app = require('../index').app;

  describe('landing page', function() {
    it('works', function testSlash(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});