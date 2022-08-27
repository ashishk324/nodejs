var util = require('util');
var text = 'Congratulation %s on his birthday %dth';
var result = util.format(text,'john','45')
console.log(result);
