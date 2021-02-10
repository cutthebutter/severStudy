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
}
wakeUp();

console.log(`hi`);