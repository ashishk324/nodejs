var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2019&?month=february'
var address = url.parse(adr,true);
console.log(address.host);
console.log(address.pathname);
console.log(address.search);
