describe("Rancid Tomatillos", () => {
  beforeEach(() => {
    cy.fixture('mockData').then(( data ) => {
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
  });

  it('Should be able to scroll to next image', () => {
    cy.get('.slick-next').click()
      .get('.slick-current')
      .contains('Pinocchio')
  });

  it('Should be able to scroll to previous img', () => {
    cy.get('.slick-prev').click() 
      .get('.slick-current')
      .contains('Face the Music')
  });

  it('Should have a list of available movies', () => {
    cy.get('.movies-container')
      .get('.movie')
      .should('have.attr', "href")
  });

})

describe('Movie details page', () => {
  beforeEach(() => {
    cy.fixture('mockMovieData').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/632618', {
        statusCode: 200,
        body:  data
      })
    })
      .visit('http://localhost:3000/632618')
  });

  it("Should see a navigation bar", () => {
    cy.get('nav')
      .contains('Rancid Tomatillos')
      .get('img')
      .should('have.class', 'nav-bar__search')
      .get('img')
      .should('have.class', 'nav-bar__home--img')
  });

  it('Should display the details of a specific movie on page load', () => {
    cy.get('.movie-detail')
      .get('h2').contains('Crimes That Bind')
      .get('img').should('have.class', 'movie-card__details__poster')
      .get('h3').contains('2020')
      .get('div').should('have.class', 'movie-card__details__rating')
      .get('img').should('have.class', 'movie-backdrop__image')
      .get('p').contains('Thriller, Crime, Drama')
      .get('p').contains('99 min')
      .get('p').contains('change her life forever')
      .get('button')
  })

})