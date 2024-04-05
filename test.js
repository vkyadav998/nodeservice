

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// // Your HTML content goes here
// const htmlContent = `
//     <html>
//     <head>
//         <title>Dynamic PDF</title>
//         <style>
//             body {
//                 margin: 0;
//                 padding: 0;
//             }
//             .content {
//                 /* Set appropriate styles for your content */
//             }
//         </style>
//     </head>
//     <body>
//         <div class="content">
//             <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         <h1>YOUR CONTENT GOES HERE</h1>
//         </div>
//     </body>
//     </html>
// `;

// // Generate PDF function
// async function generatePDF(htmlContent) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Set content to the page
//     await page.setContent(htmlContent);

//     // Get the height of the rendered content
//     const height = await page.evaluate(() => {
//         const body = document.body;
//         const html = document.documentElement;

//         return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//     });

//     // Set page height to fit the content
//     await page.setViewport({ width: 800, height });

//     // Generate PDF
//     await page.pdf({ path: 'outputs.pdf', printBackground: true });

//     await browser.close();
// }

// // Call the function
// generatePDF(htmlContent).then(() => {
//     console.log('PDF generated successfully!');
// }).catch((err) => {
//     console.error('Error generating PDF:', err);
// });


function calculateHeight(html) {
    // Split the HTML code into lines
    const lines = html.split('\n');
    
    // Assuming an average line height of 20 pixels (you can adjust this based on your requirements)
    const averageLineHeight = 20;
    
    // Calculate the height based on the number of lines
    const height = lines.length * averageLineHeight;
    
    return height;
}

// Example usage
const rawHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="content">
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </div>
</body>
</html>
`;

const height = calculateHeight(rawHtml);
console.log("Estimated height:", height, "pixels");
