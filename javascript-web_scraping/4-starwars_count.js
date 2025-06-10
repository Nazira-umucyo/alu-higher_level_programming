// File: 4-starwars_count.js
const request = require('request');

const apiUrl = process.argv[2];
const wedgeId = 'https://swapi-api.alx-tools.com/api/people/18/';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Error: Received status code ${response.statusCode}`);
    return;
  }

  const data = JSON.parse(body);
  const films = data.results;

  let count = 0;
  films.forEach(film => {
    if (film.characters.includes(wedgeId)) {
      count++;
    }
  });

  console.log(count);
});
