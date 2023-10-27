let intArray = []; // массив для целых чисел
let floatArray = []; // массив для дробных чисел

let setIntNumber = function (num, parts) { // функция для целых чисел
    let firstNumber = num;

    for (i=0; i<parts; i++) {
        if (i === parts-1) {
            intArray.push(num);
        } else if (num !== 0) {
            let currentNum = Math.floor(Math.random()*num) + 1;
            intArray.push(currentNum);
            num -= currentNum;
        } else {
            intArray.push(0);
        }
    }
    console.log(`Components for number ${firstNumber}, splited on ${parts} parts, are ${intArray}`);
}

let setFloatNumber = function (num, parts) { // функция для дробных чисел
    let firstNumber = num;

    for (i=0; i<parts; i++) {
        if (i === parts-1) {
            floatArray.push(num.toFixed(2));
        } else if (num !== 0) {
            let currentNum = (Math.random()*num).toFixed(2);
            floatArray.push(currentNum);
            num -= currentNum;
        } else {
            floatArray.push(0);
        }
    }
    console.log(`Components for number ${firstNumber}, splited on ${parts} parts, are ${floatArray}`);
}

setIntNumber(15,3);
setFloatNumber(15.25,3);