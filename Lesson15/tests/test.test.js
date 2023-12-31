const Calculator = require('../calculator');
const calcMethods = new Calculator;

describe(`Calculator tests`, function () {
    
    describe(`Add function tests`, function () {
        const testData = [
            {numbers: [1,2,9], total: 12},
            {numbers: [6,7,3,1], total: 17}
        ];
        
        test.each(testData)(`Should return $total after summing $numbers`, async ({numbers, total}) => {
            const result = calcMethods.add(...numbers);
            await expect(result).toEqual(total);
        });

        test.each(testData)(`Should return type "number" after summing nums $numbers`, async ({numbers}) => {
            const result = calcMethods.add(...numbers);
            await expect(typeof result).toBe("number");
        });
    });

    describe(`Multiply function tests`, function () {
        const testData = [
            {numbers: [1,2,9], total: 18},
            {numbers: [6,7,3,1], total: 126}
        ];
        
        test.each(testData)(`Should return $total after multiplying $numbers`, async ({numbers, total}) => {
            const result = calcMethods.multiply(...numbers);
            await expect(result).toEqual(total);
        });

        test.each(testData)(`Should return type "number" after multiplying $numbers`, async ({numbers}) => {
            const result = calcMethods.multiply(...numbers);
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

    describe(`Divide functions tests`, function () {
        const testData = [
            [21,7,3],
            [14,2,7]
        ];

        test.each(testData)(`Division %i by %i should return %i`, async (a,b,sum) => {
            const result = calcMethods.divide(a,b);
            await expect(result).toEqual(sum);
        });

        test.each(testData)(`Should return type "number" after division %i and %i`, async (a,b) => {
            const result = calcMethods.divide(a,b);
            await expect(typeof result).toBe("number");
        });
    });

    describe(`Exponentiation functions tests`, function () {
        const testData = [
            [5, 25],
            [12, 144]
        ];

        test.each(testData)(`Exponentiation of %i should return %i`, async (a,sum) => {
            const result = calcMethods.exponentiation(a);
            await expect(result).toEqual(sum);
        });

        test.each(testData)(`Should return type "number" after exponentiation of %i`, async (a) => {
            const result = calcMethods.exponentiation(a);
            await expect(typeof result).toBe("number");
        });
    });
});