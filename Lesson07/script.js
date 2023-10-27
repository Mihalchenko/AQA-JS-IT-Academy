// 1. поменять массив в обратном порядке
let arrayReverse = function (arr) {
    return arr.reverse();
};

let arrayToReverse = [1,2,3,4,5,6];

console.log(arrayReverse(arrayToReverse));

// 2. найти максимальное значение числа в массиве
let arrayFindMax = function (arr) {
    return arr.reduce( function(a,b) {
        if (a > b) {
            return a;
        } else {
            return b;
        };
    });
};

let arrayMax = [3,67,15,21,0,-81];

console.log (arrayFindMax(arrayMax));

// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
let fibonacciNum = function (startNum, length) {
    
    function getFibonacci(num) {
        return num <=1 ? num : getFibonacci(num - 1) + getFibonacci(num - 2);
    };

    let array = [getFibonacci(startNum), getFibonacci(startNum+1)];

    for (i = 2; i < length; i++) {
        let newElement = array[array.length-1] + array[array.length-2];

        array.push(newElement);
    };
    
    return array;
};

console.log(fibonacciNum(5,6));

// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению
let findMatches = function (num1, num2) {
    let samePos = 0;
    let sameValue = 0;

    let arr1 = Array.from(String(num1), Number);
    let arr2 = Array.from(String(num2), Number);

    arr1.forEach(function(elem1, index1) {
        arr2.forEach(function(elem2,index2) {
            if (elem2 === elem1 && index2 === index1) {
                samePos +=1;
            } else if (elem2 === elem1) {
                sameValue +=1;
            };
        });
    });

    return console.log(`Elements with same position and value = ${samePos}, elements with same value(only) = ${sameValue}`);
};

findMatches(3487,3794);

//5. сортировка массива по возрастанию/убыванию
let sortArray = function (arr, sortBy) {
    if (sortBy == "min") {
        arr.sort((a,b) => a-b);
    } else if (sortBy == "max") {
        arr.sort((a,b) => b-a);
    };

    return arr;
};

let arrayForSort = [5, 3, 7, 0, 12, -3];

console.log(sortArray(arrayForSort, "min"));
console.log(sortArray(arrayForSort, "max"));

//6. удалить из массива все повторяющиеся элементы
let deleteArrElements = function (arr) {
    let newArr = [];
    arr.forEach(function(item) {
        !newArr.includes(item) ? newArr.push(item) : null;
    });
    return newArr;
};

let arrayForDelete = [1,1,8,12,5,1,12,8,0];

console.log(deleteArrElements(arrayForDelete));