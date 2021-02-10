//pending
//어이가 없네 : 실행이 안됨
const promise = new Promise(function (resolve, reject) {
    const age = 26;
    if (age > 20) {
        resolve(age);
    }
});
promise
    .then(function (resolvedData) {
        console.log(resolvedData);
    });