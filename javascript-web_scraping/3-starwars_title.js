#!/usr/bin/node

const request = require('request');

// Get the movie ID from command line argument
const movieId = process.argv[2];

// Construct the API URL
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the GET request
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    console.log(film.title);
  }
});
