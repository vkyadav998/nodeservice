const pug = require('pug');
const fs = require('fs');

// Read the Pug file
const pugFilePath = 'templates/input.pug';
const pugContent = fs.readFileSync(pugFilePath, 'utf8');

// Compile Pug code to HTML
const html = pug.render(pugContent);

// Write compiled HTML to a new file
const htmlFilePath = 'templates/output.html';
fs.writeFileSync(htmlFilePath, html);

console.log(`Pug file '${pugFilePath}' compiled to HTML successfully. HTML file saved as '${htmlFilePath}'.`);
