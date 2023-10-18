//1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str1 = "589731";
let str2 = "326452";

function isNumbersEqual (str) {
    let arrStr = str.split("");
    let arrNum = arrStr.map(item => Number(item));
    
    let arr1 = arrNum.slice(0, arrNum.length/2);
    let arr2 = arrNum.slice(arrNum.length/2, arrNum.length);
    
    return arr1.reduce((sum,curr) => sum + curr, 0) === arr2.reduce((sum,curr) => sum + curr, 0) ? 'Yes' : 'No';
};

console.log(isNumbersEqual(str1));
console.log(isNumbersEqual(str2));

//2. Дано число n=1000 (может быть любое исло). Делите его на 2 столько раз, пока результат деления не станет меньше 50 (может быть любое число). Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

function checkIterationNum (number, min) {
    let num = 0;
    let rest = number;

    while (rest >= min) {
        rest /= 2;
        num += 1;
    };

    return console.log(`${rest} < ${min}, number of iterations = ${num}`);
};

checkIterationNum(1000, 50);
checkIterationNum(320, 5);

//3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let array = [12,15,20,25,59,79];

function findAverage (arr) {
    return arr.reduce((sum,curr) => sum + curr, 0)/arr.length;
};

console.log(findAverage(array));