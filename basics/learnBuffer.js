var numberBuffer=Buffer.from('456');
var alphabetBuffer = Buffer.from('ASDF');

console.log(Buffer.compare(alphabetBuffer,numberBuffer));
alphabetBuffer.copy(numberBuffer,2)
console.log(numberBuffer.toString());
console.log(Buffer.concat([alphabetBuffer,numberBuffer]).toString());
