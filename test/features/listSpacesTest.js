var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;

Browser.localhost('localhost', 3000);

describe('Listing Spaces', function() {
  before(function(done) {
    browser.visit('/spaces/new', done);
    });

    describe('non-signed users cannot list spaces', function () {
      it('form does not appear', function() {
        expect(browser.html('.spaces')).to.include('You must be signed in');
      });
    });
  });


  // describe('signed in users can list spaces', function () {
  //   before(function(done) {
  //     signIn();
  //     browser.visit('/spaces/new', done);
  //   });
  //      describe('s', function(done) {
  //        before(function(done) {
  //        browser
  //       .fill('name', 'House')
  //       .fill('ldescription', 'Romantic getaway for two')
  //       .fill('sdescription', '4 bed')
  //       .fill('price', 230)
  //       .pressButton('List space', done);
  //       });
  //   });
  //   it('adds space to the list of spaces', function() {
  //     expect(browser.html('.spaces')).to.include('House');
  //   });
  // });
  //
  // signIn = function(done) {
  //   browser.visit('/sessions/new', function() { browser
  //     .fill('email', 'test@email.com')
  //     .fill('password', '12345')
  //     .pressButton('Sign in',done);
  //   });
  // };
