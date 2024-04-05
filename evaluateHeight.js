var page = require('webpage').create();
var system = require('system');

var htmlFile = system.args[1];

page.open(htmlFile, function() {
    var contentHeight = page.evaluate(function() {
        return document.body.scrollHeight; // Get the total height of the content
    });

    console.log(contentHeight); // Output the content height
    phantom.exit();
});