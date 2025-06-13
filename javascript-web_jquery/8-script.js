$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  const films = data.results;
  for (let i = 0; i < films.length; i++) {
    $('#list_movies').append('<li>' + films[i].title + '</li>');
  }
});
