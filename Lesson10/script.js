//1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getPromise(result) {
    return new Promise((res,rej) => { 
        let randomTimer = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        setTimeout(() => res(result), randomTimer*1000);
    });
};

Promise.race([getPromise(1), getPromise(2), getPromise(3)])
.then(data => console.log(data));

//2.Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum(timer, minNum, maxNum) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            res(randomNum);
        }, timer);
    });
};

async function squareNum() {
    let result = await getNum(3000, 1, 5);
    return result ** 2;
};

squareNum().then(data => console.log(data));

//3.Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

async function getNumResult() {
    let result1 = await getNum(3000, 1, 5);
    let result2 = await getNum(5000, 6, 10);

    return result1 + result2;
};

getNumResult().then(data => console.log(data));