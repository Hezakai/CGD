var gameSlug = ""


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
     

    });
}

var btnResponse = ""

function initSearch() {

let input = document.getElementById("searchInput").value;
btnResponse = input;
gameSlug = btnResponse.replace(/\s+/g, '-').toLowerCase();
var requestUrl = 'https://api.rawg.io/api/games/' + gameSlug + '?key=09641c2e0fcd40ee8c29ef6543fe1103';
console.log(gameSlug)
getApi(requestUrl);
console.log(requestUrl)
}


