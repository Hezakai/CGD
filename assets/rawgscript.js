var requestUrl = 'https://api.rawg.io/api/games?key=09641c2e0fcd40ee8c29ef6543fe1103&per_page=5&dates=2019-09-01,2019-09-30&platforms=4&stores=1';

var responseText = document.getElementById('response-text');
var genresContainer = document.getElementById('modalGenre')
var nameContainer = document.getElementById('modalName')
var gameCover = document.getElementById('modalCover')
var genreUl = document.createElement('ul')
var genreLi = document.createElement('li')

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.results[0].length; i++)
      nameContainer.textContent = data.results[0].name;
      gameCover.src = data.results[0].background_image;
      genreLi.textContent = data.results[0].genres[0].name;
      genreUl.textContent = 'Genres:'
  
      genresContainer.appendChild(genreUl);
      genreUl.appendChild(genreLi);


    })
    .then(function (gameGenres) {
      console.log(gameGenres)
    
    });
}

getApi(requestUrl);