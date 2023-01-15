var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function log():void {
//     console.log('this is from log function');
// }
// const log = (): void => {
//     console.log('this is from log function');
// }
var log = function () { return console.log('this is from log function'); };
log();
// const logSomething=(name:string)=>console.log('name is '+name);
// const logSomething=(name:string)=>console.log(`name is ${name}`);
var logSomething = function (name) { return console.log('name is:  %s ', name); };
console.log(logSomething('somehitng'));
// function add(num1: number, num2: number) :number{
//     return num1 + num2;
// }
// const add = (num1: number, num2: number): number => {
//     return num1 + num2;
// }
var add = function (num1, num2) { return num1 + num2; };
// const result=add('DInesh',' Gopal');
var result = add(1, 4);
console.log(result);
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(mergeObject({ name: 'd' }, { loc: 'BLR' }));
console.log(mergeObject(1, 2));
