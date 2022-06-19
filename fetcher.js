const fs = require('fs');
const request = require('request');
const commandLineArgs = process.argv.slice(2);

let URL = commandLineArgs[0];
let filePath = commandLineArgs[1];

request(URL, (error, response, content) => {
  if (error) throw error;

  fs.writeFile(`${filePath}`, content, (error) => {
    if (error) {
      throw error;
    } else {
    console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
  }
});
});