var Browser = require('zombie');
var browser = new Browser();
var url = 'localhost:3000';
var chai = require('chai');
var expect = chai.expect;
// var app = require('./app.js');

Browser.localhost('localhost', 3000);

describe('Listing spaces',function() {

  before(function(done) {
    browser.visit('/spaces/new', done);
    browser
      .fill('name', 'The Cute Cottage')
      .fill('description', 'Romantic getaway for two')
      .fill('price', 230)
      .pressButton('List space',done);
  });

  it('user can add a space', function(done) {
    expect(browser.html('spaces')).to.include('The Cute Cottage');
  });

});
