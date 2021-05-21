var mocha = require('mocha'); 
var chai = require('chai'); 
var dom = require('jsdom');
var fs = require('fs'); 

var html = fs.readFileSync(__dirname + '/index.html',); 


describe('Dom Changes', function() {
    it('Should Show Text', function() {
        var page = new dom.JSDOM(html, { runScripts: "dangerously" });
        var button = page.window.document.getElementById('button');
        var textDisplay= page.window.document.getElementById('textDisplay');
       button.click();
       console.log('the text is ',textDisplay.innerHTML);
       chai.assert.equal(textDisplay.innerHTML, 'CONGRATS')
    });
  
  });