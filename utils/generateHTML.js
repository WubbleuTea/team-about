const fs = require('fs')
const { managerArr, internArr, engineerArr } = require('../Index')
const HtmlArr = []


const generateHTML = () => {
    fs.writeFile('./dist/index.html', (err) => {
        if (err) throw err;
        console.log('The file has been created!');
        writeHTML();
      }); 
}

const writeHTML = () => {
    console.log(`HTML being written`);
}


module.exports = { generateHTML };

// create HTML including 
// linking bootstrap for style 
// for each on 3 array
// join the cards together 
