describe("Rancid Tomatillos", () => {
  beforeEach(() => {
    cy.fixture('mockData').then((data) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body:  data 
    })
    })
      .visit('http://localhost:3000/')
  })

  it("Should see a navigation bar", () => {
    cy.get('nav')
      .contains('Rancid Tomatillos')
      .get('img')
      .should('have.class', 'nav-bar__search')
  });

  it('Should see a carousel', () => {
    cy.get('.slick-current')
      .contains('The Devil')
    // cy.get('.hero')
    //   .contains('Tenet')
    //   .get('.hero').get('img')
    //   .should('have.class',  'hero__img')
  })

  it('Should be able to scroll to next image', () => {
    cy.get('.slick-next').click()
      .get('.slick-current')
      .contains('Pinocchio')
  })

  it('Should be able to scroll to previous img', () => {
    cy.get('.slick-prev').click() 
      .get('.slick-current')
      .contains('Face the Music')
  })


})