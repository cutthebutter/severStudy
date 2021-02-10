//1. 함수 선언식 

function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); //5

//2. 함수 표현식
var addStr = function (x, y) {
    return x + y;
}
console.log(addStr("안녕", "하세요")); //안녕하세요

//2.1 화살표 함수 표현식
var add = (x, y) => {
    return x + y;
}
console.log(add(2, 3)); //5

//3. 화살표 함수

//로직이 한줄일때 return문 생략 가능
var add1 = function (x, y) {
    return x + y;
}
console.log(add1(2, 3)); //5

var add2 = (x, y) => x + y;
console.log(add2(2, 3)); //5

var add3 = (x, y) => (x + y);
console.log(add3(2, 3)); //5

// 매개변수가 하나일때 매개변수 소괄호 생략 가능
var square1 = function (x) {
    return x * x;
}

var square2 = x => x * x;

console.log(square1(2)); //4
console.log(square2(2)); //4

// 객체를 리턴하고 로직이 한줄일때는 소괄호 ( ) 로 감싸줘야함
var person = function (name, age) {
    return {
        name: name,
        age: age,
    };
}

var person = (name, age) => ({
    name: name,
    age: age
});

console.log(person('세민', 22));