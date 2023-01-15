function log() {
    console.log('this is from log function');
}

log();
function add(num1: number, num2: number) {
    return num1 + num2;
}

// const result=add('DInesh',' Gopal');
const result = add(1, 4);
console.log(result);


function mergeObject(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObject(
    { name: 'd' },
    { loc: 'BLR' }
))
console.log(mergeObject(
    1,2
))


