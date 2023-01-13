var requestUrl = 'https://api.rawg.io/api/games?key=09641c2e0fcd40ee8c29ef6543fe1103&per_page=5&dates=2019-09-01,2019-09-30&platforms=4&stores=1';

var responseText = document.getElementById('response-text');
var genresContainer = document.getElementById('modalGenre')
var nameContainer = document.getElementById('modalName')
var gameCover = document.getElementById('modalCover')
var genreUl = document.createElement('ul')
      genreUl.classList.add('genre')
var genreLi = document.createElement('li')


function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      gameCover.src = data.results[0].background_image;

      for (var i = 0; i < data.results[0].genres.length; i++) {
        console.log(data.results[0].genres[i])
        nameContainer.textContent = data.results[0].name;
        var genreArr = [data.results[0].genres[0].name, data.results[0].genres[1].name, data.results[0].genres[2].name, data.results[0].genres[3].name]

        // console.log("here is the name", data.results[0].genres[i].name)

        // document.getElementById('genre').textContent = (data.results[0].genres[i].name);
        genreLi.textContent = genreArr;
        genreUl.textContent = 'Genres:'

        genreUl.appendChild(genreLi);
        genresContainer.appendChild(genreUl);
        

      }
    })
    .then(function (gameGenres) {
      console.log(gameGenres)

    });
}

getApi(requestUrl);