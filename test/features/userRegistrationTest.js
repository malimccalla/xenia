var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);


describe('user registration', function() {
  before(function(done) {
    browser.visit('/users/new', done);
  });

  it('displays an email and password form', function(done) {
    browser
      .fill('email', 'test@email.com')
      .fill('password', '12345')
      .fill('password-confirmation', '12345')
      .pressButton('sign-up',done);
  });

  it('displays', function() {
    expect(browser.html('body')).to.include('test@email.com');
  });

});
