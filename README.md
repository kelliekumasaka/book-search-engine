# Book Search Engine<br>![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

## About

A website that allows the user to look for books and save them and mark them as read.

## Deployment

```
https://kk-book-search-engine.herokuapp.com/
```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

On this website, a user has the ability to search any book using the Google Books API and save those books to remember for later. When the user first comes to the page, they are shown a search bar where they can search their desired book. 

![search bar nav bar](/client/public/images/search.png)

Once they search their desired title or author, they are shown descriptions, titles, authors, and images provided by the API. 

![search results for author Haruki Murakami](/client/public/images/results.png)

However, the user is unable to save these books unless they login or sign up by clicking on the top right hand `Login/Sign Up` link. Upon clicking the link, the following modal pops up.

![login modal pop up](/client/public/images/login.png)

When the user logs in, they can now click on the `Save Book` button on the bottom of the desired book and then view their saved books.

![saved books page including J.K. Rowling's Harry Potter and the Deathly Hallows and Haruki Murakami's 1Q84](/client/public/images/savedbooks.png)

## Installation

Run `npm i` to install `bcrypt`, `express`, `jsonwebtoken`, `mongoose` for server-side, and `@apollo/client`, `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`, `bootstrap`, `graphql`, `jwt-decode`, `react`, `react-bootstrap`, `react-dom`, `react-dom-router`, `react-scripts` for client-side. This website also uses the [Google Books API](https://developers.google.com/books/docs/overview).

## Usage

## Contributing

## Tests

## License

This project is licensed under ISC.

## Questions

Here is a link to my [GitHub](https://github.com/kelliekumasaka) or shoot me an [email](mailto:kelliek3@gmail.com).
