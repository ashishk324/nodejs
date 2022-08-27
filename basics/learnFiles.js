const fs = require('fs');
//fs.writeFileSync('writeFirstText.txt','this is my first message');
fs.readFile('writeFirstText.txt','utf-8',function(err,data){
    console.log(data);
})
