var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);


describe('user registration', function() {
  before(function(done) {
    browser.visit('/sessions/new', done);
  });

  it('displays a login form', function(done) {
    browser
      .fill('email', 'test@email.com')
      .fill('password', '12345')
      .pressButton('Sign in',done);
  });

  it('displays', function() {
    expect(browser.html('body')).to.include('test@email.com');
  });

});
