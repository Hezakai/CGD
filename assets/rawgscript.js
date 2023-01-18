var gameSlug = ""



var nameContainer = document.getElementById('gameName')
var releaseDate = document.getElementById('releaseDate')
var gameDesc = document.getElementById('description')

var pub = document.getElementById('pub')
var studio = document.getElementById('studio')
var metascore = document.getElementById('metascore')
var ratingUser = document.getElementById('ratingUSER')
var gameGenre = document.getElementById('genre')
var platforms = document.getElementById('platforms')
var tags = document.getElementById('tags')

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
      gameDesc.textContent = data.description_raw
      releaseDate.textContent = data.released
      metascore.textContent = data.metacritic
      ratingUser.textContent = data.rating
      

      for (var y = 0; y < 10; y++) {
        var tagBody = document.createElement('p')
        tagBody.textContent = data.tags[y].name
        
        tags.append(tagBody)
        // console.log(tagBody)
      }

      for (var t = 0; t < data.platforms.length; t++) {
        var platBody = document.createElement('p')
        platBody.textContent = data.platforms[t].platform.name
        platforms.append(platBody)
      }

      
      for (var f = 0; f < data.genres.length; f++) {
        var genreBody = document.createElement('p')
        genreBody.textContent = data.genres[f].name
        gameGenre.append(genreBody)
      }

      for (var i = 0; i < data.publishers.length; i++) {

        var pubBody = document.createElement('p')
        pubBody.textContent = data.publishers[i].name
        pub.append(pubBody)
      }
  
      for (var j = 0; j < data.developers.length; j++) {
  
        var devBody = document.createElement('p')
        devBody.textContent = data.developers[j].name
        studio.append(pubBody)
      }
    })
    
   
}



var btnResponse = ""

function gameSearch() {

  let input = document.getElementById("searchInput").value;
  btnResponse = input;
  gameSlug = btnResponse.replace(/\s+/g, '-').toLowerCase();

  var requestUrl = 'https://api.rawg.io/api/games/' + gameSlug + '?key=09641c2e0fcd40ee8c29ef6543fe1103';
  console.log(gameSlug)
  getApi(requestUrl);
  console.log(requestUrl)
  document.getElementById("tags").innerHTML = ""
  document.getElementById("platforms").innerHTML = ""
  document.getElementById("genre").innerHTML = ""
  document.getElementById("pub").innerHTML = ""
  document.getElementById("studio").innerHTML = ""
}

function landscapeHidden() {
  var T = document.getElementById("landscapeHidden");
  T.style.display = "block";
}