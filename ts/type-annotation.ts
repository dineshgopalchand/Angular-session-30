let nameVal: string;

let someValue: any = 1;
// (someValue as string).
// nameVal = (someValue as number).toString();
nameVal = (<number>someValue).toString();
console.log(nameVal);