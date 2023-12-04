const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const apiSchema = require('../data/fakeAPIschema.json');

describe(`fakeAPI tests`, function () {
    const apiURL = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

    describe(`GET method tests`, function () {
        let response;

        beforeAll(async() => {
            response = await axios.get(apiURL);
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
            response = await axios.post(apiURL, {
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
            const id = 2;
            response = await axios.get(`${apiURL}/${id}`);
        });

        test(`Should return status code 200`, async () => { 
            expect(response.status).toBe(200);
        });
    
        test(`Should be valid response body`, async () => {
            const result = validate.validate(response.data, apiSchema);
            expect(result.valid).toBe(true);
        });
    });
    
    describe(`PUT by ID method tests`, function () {
        let response;

        beforeAll(async() => {
            const id = 2;
            response = await axios.put(`${apiURL}/${id}`, {
                "id": 0,
                "title": "string",
                "dueDate": "2023-11-20T16:07:57.473Z",
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

    describe(`DELETE by ID method tests`, function () {
        let response;

        beforeAll(async() => {
            const id = 2;
            response = await axios.delete(`${apiURL}/${id}`);
        });

        test(`Should return status code 200`, async () => { 
            expect(response.status).toBe(200);
        });
    
        test(`Should be empty response body`, async () => {
            expect(response.data).toBe("");
        });
    });
});