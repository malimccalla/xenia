var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);


describe('Sign in', function() {
  before(function(done) {
    browser.visit('/sessions/new', done);
  });

  it('displays a login form', function(done) {
    browser
      .fill('email', 'test@email.com')
      .fill('password', '12345')
      .pressButton('Sign in',done);
  });

  it('displays logged in user', function() {
    expect(browser.html('body')).to.include('test@email.com');
  });

});

describe('Sign out', function() {

  it('does not display a logged in user when user has logged out', function(done) {

    signIn(function() {browser.clickLink('logout', done);
    expect(browser.html('body')).not.to.include('test@email.com');
  });
});

});

signIn = function(done) {
  browser.visit('/sessions/new', function() { browser
    .fill('email', 'test@email.com')
    .fill('password', '12345')
    .pressButton('Sign in',done);
  });
};
