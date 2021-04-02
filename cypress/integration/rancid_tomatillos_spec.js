describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.fixture('mockData').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body:  data
    })
    })
      .visit('http://localhost:3000/')
  });

  it('Should see a navigation bar', () => {
    cy.get('nav h1')
      .contains('Rancid Tomatillos')
      .get('img')
      .should('have.class', 'nav-bar__search')
  });

  it('Should not see a home button', () => {
    cy.get('.nav-bar__home')
      .should('not.be.visible')
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
      .should('have.attr', 'href')
  });

  it('Should be able to click on a movie to see its details', () => {
    cy.fixture('mockMovieData').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/632618', {
        statusCode: 200,
        body:  data
      })
    })
      .get('.movie[href="/movies/632618"]')
      .click()
      .location('pathname').should('eq', '/movies/632618')
      .get('.movie-detail')
      .get('h2').contains('Crimes That Bind')
  });
});

describe('Movie details page', () => {
  beforeEach(() => {
    cy.fixture('mockMovieData').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/632618', {
        statusCode: 200,
        body:  data
      })
    })
      .visit('http://localhost:3000/movies/632618')
  });

  it('Should see a navigation bar', () => {
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
  });

  it('Should be able to travel back to the home page', () => {
    cy.get('.nav-bar__home').click()
      .location('pathname').should('eq', '/')
  });
});

describe('Error handling', () => {
  it('Should display an error message when visiting a nonexistent URL', () => {
    cy.fixture('mockData').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      body:  data
      })
    })
      .visit('http://localhost:3000/foo')
      .get('.error__message')
      .contains('Something went wrong')
  });

  it('Should display a specific error message when fetch yields a 404 status', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
    })
      .visit('http://localhost:3000/')
      .get('.error__message')
      .contains('Page not found')
  });

  it('Should display a specific error message when fetch yields a 500 status', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
    })
      .visit('http://localhost:3000/')
      .get('.error__message')
      .contains('Please try again later')
  });

  it('Should display an error message when there is a network error', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      forceNetworkError: true
    })
      .visit('http://localhost:3000/')
      .get('.error__message')
      .contains('Something went wrong')
  });

  it('Should display error message if network down and clicked on movie poster', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/632618', {
        forceNetworkError: true
      })
      .visit('http://localhost:3000/')
      .get('.movie[href="/movies/632618"]')
      .click()
      .get('.error__message')
      .contains('Something went wrong')
  });
});