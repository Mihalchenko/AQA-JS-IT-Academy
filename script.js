let string = "10";
let bool = true;
let num = 5;

console.log(`sting is ${string}`);
console.log(`boolean is ${bool}`);
console.log(`number is ${num}`);

console.log(`string + boolean = ${string + bool}`);
console.log(`string + number = ${string + num}`);
console.log(`number + boolean = ${num + bool}`);

console.log(`string * boolean = ${string * bool}`);
console.log(`string * number = ${string * num}`);
console.log(`number * boolean = ${num * bool}`);

console.log(`string / boolean = ${string / bool}`);
console.log(`string / number = ${string / num}`);
console.log(`number / boolean = ${num / bool}`);

console.log(`Func Number() on string = ${Number(string)}, type = ${typeof(Number(string))}`);
console.log(`Func Number() on boolean = ${Number(bool)}, type = ${typeof(Number(bool))}`);

console.log(`Func String() on boolean = ${String(bool)}, type = ${typeof(String(bool))}`);
console.log(`Func String() on number = ${String(num)}, type = ${typeof(String(num))}`);

console.log(`Func Boolean() on string = ${Boolean(string)}, type = ${typeof(Boolean(string))}`);
console.log(`Func Boolean() on number = ${Boolean(num)}, type = ${typeof(Boolean(num))}`);