const fs = require('fs');
const text = fs.readFileSync('jsondata.json').toString();
console.log(text)

var trainingObj = JSON.parse(text)
trainingObj.name = "Updated Name";

console.log(JSON.stringify(trainingObj));
fs.writeFileSync('jsondata.json',JSON.stringify(trainingObj));