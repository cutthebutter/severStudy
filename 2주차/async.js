//1. 동기 방법
function getData1(){
    var data1 = 'data';
    return data1;
}

const data1 = getData1();

//2. promise 패턴으로 비동기 처리
function getData2(){
    return new Promise((resolve, reject) => {
        const data2 ='data2'
        resolve(data2)
    })
}

const data2 = getData2();

data2.then((value) => {
    console.log(value);
});

//3. 위의 promise 패턴을 async를 사용해서
//함수 앞에  async를 붙이면 암묵적으로 promise를 반환
async function getData3(){
    const data3 = 'data3'
    return data3;
}

const data3 = getData3();

data3.then((value) => {
    console.log(value);
})

//4. promise를 기다림(await)(성공/실패) : async로 정의된 함수에서만 사용가능
async function getData4(){
    const data4 = 'data4'
    return data4;
}

async function main(){
    const data4 = await getData4();
    console.log(data4);
}

main();