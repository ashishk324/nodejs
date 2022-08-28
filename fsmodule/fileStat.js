const fs  = require('fs');
fs.stat('checkFile.txt',(err,stats)=>{
console.log(stats)
});