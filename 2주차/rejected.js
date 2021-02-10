const promise = new Promise(function (resolve, reject) {
    const age = 19;
    if (age > 20) {
        resolve(age);
    } else {
        reject(new Error('나이가 너무 어립니다.'));
    }
});
promise
    .then(function (resolvedData) {
        console.log(resolvedData);
    })
    .catch(function(err){
        console.log(err);
    });