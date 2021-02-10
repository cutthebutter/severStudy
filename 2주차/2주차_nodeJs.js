function wakeUp() {
    wash();
    console.log('wakeUp');
}

function wash() {
    breakfast();
    console.log('brush');
}

function breakfast() {
    console.log('breakfast');
    throw new Error(`콜스택에서 에러 찾기 테스트`);
}
wakeUp();