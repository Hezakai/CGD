var gameSlug = ""


var responseText = document.getElementById('response-text');
var genresContainer = document.getElementById('modalGenre')
var nameContainer = document.getElementById('gameName')
var gameCover = document.getElementById('modalCover')
var coverImg = document.getElementById('backgroundImg')




function getApi(requestUrl) {
  fetch(requestUrl)

    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      nameContainer.textContent = data.name
      coverImg.setAttribute("src", data.background_image)


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


