var requestUrl = 'https://api.rawg.io/api/games?key=09641c2e0fcd40ee8c29ef6543fe1103&per_page=5&dates=2019-09-01,2019-09-30&platforms=4&stores=1';

var responseText = document.getElementById('response-text');
var genresContainer = document.getElementById('modalGenre')



function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
  })
    .then(function(data) {
      console.log(data);
      // console.log(data.results[0].genres);

      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i])
      }
      
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[0].genres[i])
        genresContainer.textContent = "Genre: " + data.results[0].genres[0].name;
    
      }
  });
  
}

getApi(requestUrl);