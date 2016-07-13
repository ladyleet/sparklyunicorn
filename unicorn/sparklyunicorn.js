const fs = require('fs');

const folderName = 'erdbeer';

function sparklyunicorn () {
  fs.mkdir(folderName);

  fs.writeFile(`${folderName}/lollipop.js`, "Hey there!", function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

module.exports = sparklyunicorn;
