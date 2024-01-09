import apiSchema from '../../data/fakeAPIschema.json';

describe('Onliner API testing', () => {

  it('Trying to get personal charts have to redirect to login page due to not log in', () => {
    cy.api({
        method: "GET",
        url: 'https://chats.onliner.by/',
    }).then(response => expect(response.redirects).to.have.ownProperty('length'));
  });

  it('Get used Xiaomi notebooks list should return status code 200', () => {
    cy.api({
        method: "GET",
        url: 'https://catalog.onliner.by/sdapi/catalog.api/search/notebook/second-offers?mfr[0]=xiaomi&segment=second',
    }).then(response => expect(response.status).to.equal(200));
  });

  it('Get used Xiaomi notebooks list should return response with valid body', () => {
    cy.api({
        method: "GET",
        url: 'https://catalog.onliner.by/sdapi/catalog.api/search/notebook/second-offers?mfr[0]=xiaomi&segment=second',
    }).then(response => expect(response.body).to.be.jsonSchema(apiSchema));
  });

  it('Delete used Xiaomi notebooks list should return status code 405', () => {
    cy.api({
        method: "DELETE",
        url: 'https://catalog.onliner.by/api/seo',
        failOnStatusCode: false,
        headers: {
          Referer: "https://catalog.onliner.by/notebook?mfr%5B0%5D=xiaomi&segment=second",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        }
    }).then(response => expect(response.status).to.equal(405));
  });
});