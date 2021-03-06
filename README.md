# Rancid Tomatillos

## Contributors
* [Steven M](https://github.com/itsnameissteven)
* [Katie B](https://github.com/knees4bees)

## Deployed Site 
[Rancid Tomatillos](https://rancid-tomatillos-max.herokuapp.com/)


## Table of Contents 

- [About the Project](#about-the-project)
- [Project Goals](#project-goals)
- [Features](#features)
  - [Home Page](#home-page)
  - [Movie Details](#movie-details)
  - [Search](#search)
  - [Watch Trailer](#watch-trailer)
- [Accessibility](#accessibility)
- [Responsive Design](#responsive-design)
- [Error Handling](#error-handling)
- [Future Considerations](#future-considerations)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## About The Project
Rancid Tomatillos is a fictional web app that allows users to browse movies and view their details. Design inspirations were grabbed from HBO Max and Netflix.

## Project Goals 
1. Learn how to implement React.
2. Use React Router to conditionally render components.
3. Use Cypress to test React components and asynchronous JS.
4. Make the app completely accessible by keyboard.
5. Implement responsive design for cross-screen compatibility.
6. Add extra features such as embedded YouTube videos and animated search.

## Features
### Home Page
Upon visiting the home page, a user sees a featured movie and thumbnail images of all movies. The user can click on a movie image to see details about that movie or click on the search icon to search for a movie by title.

![landing_page](https://user-images.githubusercontent.com/72312636/113641447-db830b00-963a-11eb-96a7-38f5dbbe0ed8.gif)

### Movie Details
After selecting a movie from the home page or from the search results page, a user is directed to a new URL and details about the selected movie are displayed. The user can click on a button to watch the trailer for that movie without leaving the app.

<img width="1415" alt="Movie details" src="https://user-images.githubusercontent.com/72312636/113641591-2d2b9580-963b-11eb-8db5-67ebded89bc4.png">

### Search 
When a user clicks on the search icon from any page, a nicely animated search box opens up in which the user can type part of a movie's title. When the search button is clicked, the user is redirected to a new URL and thumbnails for all matching movies are displayed.

![search](https://user-images.githubusercontent.com/72312636/113642352-d8891a00-963c-11eb-95d0-b9e690ae864a.gif)

### Watch Trailer
On a movie detail page, if a trailer for that movie is available, there will be a Watch Trailer button that the user can click. A pop-up containing the embedded trailer appears on the page.

![movie_trailer](https://user-images.githubusercontent.com/72312636/113641484-e9389080-963a-11eb-9f34-bbeab9b79a1d.gif)

## Accessibility
The app is fully accessible with the use of a keyboard. Use the tab key to travel to each relevant section and use enter to click.

## Responsive Design 
Responsive design was considered for desktop, tablet and mobile view.

![ResponsiveDesign](https://user-images.githubusercontent.com/72312636/113642210-8942e980-963c-11eb-8b74-65d014b79997.gif)
![ResponsiveDesign2](https://user-images.githubusercontent.com/72312636/113642287-b394a700-963c-11eb-8d5e-c04fd6782e0d.gif)

## Error Handling
Error handling was built to give the user feedback if a bad response is returned from api calls.

<img width="1439" alt="Screen Shot 2021-04-05 at 6 43 07 PM" src="https://user-images.githubusercontent.com/72312636/113643388-77af1100-963f-11eb-87a0-be83883644e3.png">

## Future Considerations
* Refactor search routing so that a unique URL is generated for each search query.
* Display a multi-item carousel for each genre below the main carousel on the home page.
* Add more data cleaning so that a movie with missing or irrelevant details is handled gracefully.

## Technologies Used

- ![React](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)

- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

- ![Node](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)

## Contact
[<img src="https://img.shields.io/badge/LinkedIn-steven-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin1]
[<img src="https://img.shields.io/badge/Github-itsnameissteven-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github1]
<!--Personal Definitions -->
[linkedin1]: https://www.linkedin.com/in/steven-mancine-13509521/
[github1]: https://github.com/itsnameissteven

[<img src="https://img.shields.io/badge/LinkedIn-katie-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-knees4bees-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]
<!--Personal Definitions -->
[linkedin2]: https://www.linkedin.com/in/katie-b-dev/
[github2]: https://github.com/knees4bees
