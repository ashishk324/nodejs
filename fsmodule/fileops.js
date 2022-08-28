const fs = require('fs');
fs.open('checkFile.txt', 'r+', (err, fd) => {
    if (err) {
        console.log(err);
    } else {
       // console.log(fd)
        fs.readFile(fd,'utf-8',(err,data)=>{
            console.log(data);
        })
    }

});

fs.appendFile('checkFile.txt',"appending data")