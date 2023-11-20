const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const apiSchema = require('../data/fakeAPIschema.json');

describe(`fakeAPI tests`, function () {

    describe(`GET method tests`, function () {
        let response;

        beforeAll(async() => {
            response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');
        });

        test(`Should return status code 200`, async () => { 
            expect(response.status).toBe(200);
        });
    
        test(`Should be valid response body`, async () => {
            const result = validate.validate(response.data, {apiSchema});
            expect(result.valid).toBe(true);
        });
    });

    describe(`POST method tests`, function () {
        let response;

        beforeAll(async() => {
            response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
                "id": 0,
                "title": "string",
                "dueDate": "2023-11-20T12:12:21.962Z",
                "completed": true
              });
        });

        test(`Should return status code 200`, async () => { 
            expect(response.status).toBe(200);
        });
    
        test(`Should be valid response body`, async () => {
            const result = validate.validate(response.data, apiSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe(`GET by ID method tests`, function () {
        let response;

        beforeAll(async() => {
            response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
                params: {id: 2}
            });
        });

        test(`Should return status code 200`, async () => { 
            expect(response.status).toBe(200);
        });
    
        test(`Should be valid response body`, async () => {
            console.log(response);
            const result = validate.validate(response.data, apiSchema);
            expect(result.valid).toBe(true);
        });
    });
    
});