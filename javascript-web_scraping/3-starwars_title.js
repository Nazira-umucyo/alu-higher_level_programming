// File: 3-starwars_title.js
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Error: Received status code ${response.statusCode}`);
    return;
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
