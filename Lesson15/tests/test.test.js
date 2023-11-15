const Calculator = require('../calculator');
const calcMethods = new Calculator;

describe(`Calculator tests`, function () {
    
    describe(`Add function tests`, function () {
        const testData = [
            {numbers: [1,2,9], total: 12},
            {numbers: [6,7,3,1], total: 17}
        ];
        
        test.each(testData)(`Should return $total after summing $numbers`, async ({numbers, total}) => {
            console.log(Array.isArray(numbers));
            const result = calcMethods.add(numbers);
            await expect(result).toEqual(total);
        });

        test.each(testData)(`Should return type "number" after summing nums $numbers`, async ({numbers}) => {
            const result = calcMethods.add(numbers);
            await expect(typeof result).toBe("number");
        });
    });

    describe(`Multiply function tests`, function () {
        const testData = [
            {numbers: [1,2,9], total: 18},
            {numbers: [6,7,3,1], total: 126}
        ];
        
        test.each(testData)(`Should return $total after multiplying $numbers`, async ({numbers, total}) => {
            console.log(Array.isArray(numbers));
            const result = calcMethods.multiply(numbers);
            await expect(result).toEqual(total);
        });

        test.each(testData)(`Should return type "number" after multiplying $numbers`, async ({numbers}) => {
            const result = calcMethods.multiply(numbers);
            await expect(typeof result).toBe("number");
        });
    });

    describe(`Subtraction functions tests`, function () {
        const testData = [
            [7,4,3],
            [10,3,7]
        ];

        test.each(testData)(`Substrucion %i from %i should return %i`, async (a,b,sum) => {
            const result = calcMethods.subtraction(a,b);
            await expect(result).toEqual(sum);
        });

        test.each(testData)(`Should return type "number" after substruction %i and %i`, async (a,b) => {
            const result = calcMethods.subtraction(a,b);
            await expect(typeof result).toBe("number");
        });
    });
});