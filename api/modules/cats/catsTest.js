var app = require('../../index');
var request = require('supertest');


describe('cats', function() {
  it('should GET all cats', function(done) {
    request(app)
      .get('/cats')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .done(function (err, resp) {
        expect(resp.id).toBeDefined();
        done();
      });
  });
});
