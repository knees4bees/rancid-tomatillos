describe("Rancid Tomatillos", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("Should see home page", () => {
    cy.get('nav')
      .contains('Rancid Tomatillos')
      .get('img')
      .should('have.class', 'nav-bar__search')
  });
})