const Calculator = require('../calculator');
const calcMethods = new Calculator;

describe(`Calculator tests`, function () {
    
    describe(`Add function tests`, function () {
        let testData = [[1,2,3], [5,6,11]];
        
        test.each(testData)(`%i + %i should be equal %i`, async (firstNum, secondNum, sum) => {
            const result = calcMethods.add(firstNum, secondNum);
            await expect(result).toEqual(sum);
        });

        test.each(testData)(`%i + %i should be type "number"`, async (firstNum, secondNum, sum) => {
            const result = calcMethods.add(firstNum, secondNum);
            await expect(typeof result).toBe("number");
        });
    });

});