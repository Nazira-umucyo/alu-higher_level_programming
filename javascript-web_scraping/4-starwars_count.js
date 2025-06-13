#!/usr/bin/node

const request = require('request');

// Get the API URL from command line
const apiUrl = process.argv[2];

// Wedge Antilles character ID
const wedgeId = '18';

// Perform the GET request
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body).results;
  let count = 0;

  data.forEach(film => {
    // Check if any character URL includes `/18/`
    if (film.characters.some(charUrl => charUrl.includes(`/people/${wedgeId}/`))) {
      count++;
    }
  });

  console.log(count);
});
