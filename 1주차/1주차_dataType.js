//Symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description)
console.log(symbol1 === symbol2);

console.log('-------------');

//무슨말??

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function () {
    return 'its Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1)); // true, JS 기본 includes 함수
console.log(arr['includes'](1)); // true, JS 기본 includes 함수
console.log(arr[includes]()); // its Symbol, 커스텀 includes 함수

//null, undefined
let noting = null;
console.log(`nothing : ${noting}, type: ${typeof noting}`);
let x;
console.log(`x: ${x}, type: ${typeof x}`);

// null vs undefined
console.log('null vs undefined');
console.log('null === undefined: ', null === undefined);
console.log('null == undefined: ', null == undefined);