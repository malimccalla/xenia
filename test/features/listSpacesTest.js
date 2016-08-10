var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);

describe('Listing Spaces', function() {
  before(function(done) {
    browser.visit('/spaces/new', done);
  });

  it('filling out the form to add a space', function(done) {
    browser
      .fill('name', 'Cute Cottage')
      .fill('description', 'Romantic getaway for two')
      .fill('price', 230)
      .pressButton('List space', done);
  });

  it('adds space to the list of spaces', function() {
    expect(browser.html('.spaces')).to.include('Cute Cottage');
  });

});
