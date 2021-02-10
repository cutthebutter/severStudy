var variableVar = "123";
var variableVar = "321";
variableVar = "567"

let variableLet = "123";
// let variableLet = "321";
variableLet = "789"

const variableConst = "123";
// const variableConst = "321";

console.log(`variableVar: ${variableVar}`)
console.log(`variableLet: ${variableLet}`)
// console.log(`variableConst: ${variableConst}`)

if(true){
    var x = "var";
}
console.log(`var:${x}`);//var : var

if(true){
    let y = 'let';
}
// console.log(`let: ${y}`);//ReferenceError: y is not defined

function colorFunction(){
    if(true){
        var color = 'blue';
        console.log(color);//blue
    }
    color.lastIndexOf(color);//blue
}
colorFunction();
// console.log(color);//ReferenceError: color is not defined

const name = "이세민";
const greeting = "나는 " + name + "이야" ;
console.log('안녕! '+ greeting + ' type: '+typeof greeting);//안녕! 나는 이세민이야 type: string
console.log(`안녕! ${greeting} type: ${typeof greeting}`);//안녕! 나는 이세민이야 type: string




