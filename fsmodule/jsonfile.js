const fs = require('fs')
const series = {
    name : 'Ashish Kathait',
    training : 'nodejs'
};

console.log(JSON.stringify(series));
var jsonString = JSON.stringify(series);
var parsedData = JSON.parse(jsonString);
console.log('json object--',parsedData);
console.log(parsedData.name);
fs.writeFile('jsondata.json',jsonString,(err,data)=>{
    if(err){
        console.log(err);
    }
})