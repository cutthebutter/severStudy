const crypto = require('crypto');

const pw1 = '1234';
const pw2 = '121212';
const base64_pw1 = crypto.createHash('sha512').update(pw1).digest('base64');
const base64_pw2 = crypto.createHash('sha512').update(pw2).digest('base64');
const hex_pw1 = crypto.createHash('sha512').update(pw1).digest('hex');

console.log(`base64_pw1 : ${base64_pw1}`);
console.log(`base64_pw1 : ${base64_pw2}`);
console.log(`base64_pw1 : ${hex_pw1}`);