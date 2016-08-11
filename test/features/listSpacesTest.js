var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);

describe('Listing Spaces', function() {
  before(function(done) {
    console.log(done);
    browser.visit('/spaces/new', done);
    });

    describe('user can list spaces', function () {
      before(function(done) {
        browser
          .fill('name', 'House')
          .fill('ldescription', 'Romantic getaway for two')
          .fill('sdescription', '4 bed')
          .fill('price', 230)
          .pressButton('List space', done);
      });
      it('adds space to the list of spaces', function() {
        expect(browser.html('.spaces')).to.include('House');
      });
    });
  });
