let fs = require('fs');
fs.mkdir('erdbeer' function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

let fs = require('fs');
fs.writeFile("lollipop.js", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
