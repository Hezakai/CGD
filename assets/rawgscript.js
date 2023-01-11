var requestUrl = 'https://api.rawg.io/api/games?key=09641c2e0fcd40ee8c29ef6543fe1103&dates=2019-09-01,2019-09-30&platforms=4&stores=1';

var responseText = document.getElementById('response-text');
var genresContainer = document.getElementById('genres')

// var resultsArr = data.results

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
  })
    .then(function(data) {
      console.log(data)
      for (var i = 0; i < data.results.length; i++) {
        var genreEl = document.createElement('p');
        genreEl.textContent = data.results[i].genres;
        genresContainer.append(genreEl);
      }
  });
  
}

getApi(requestUrl);