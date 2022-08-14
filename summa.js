const Cryptr = require('cryptr');
const cryptr = new Cryptr('placement_project');

const encryptedString = cryptr.encrypt('1234');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); 
console.log('this decrypt',decryptedString); 