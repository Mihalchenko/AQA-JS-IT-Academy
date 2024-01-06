import apiSchema from '../../data/fakeAPIschema.json';

describe('Onliner API testing, getting response on GET method of used xiaomi notebooks', () => {

  it('Get used Xiaomi notebooks list should return status code 200', () => {
    cy.api({
        url: 'https://catalog.onliner.by/sdapi/catalog.api/search/notebook/second-offers?mfr[0]=xiaomi&segment=second',
    }).then(response => expect(response.status).to.equal(200));
  });

  it('Get used Xiaomi notebooks list should return response with valid body', () => {
    cy.api({
        url: 'https://catalog.onliner.by/sdapi/catalog.api/search/notebook/second-offers?mfr[0]=xiaomi&segment=second',
    }).then(response => expect(response.body).to.be.jsonSchema(apiSchema));
  });

});