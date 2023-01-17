var gameSlug = ""

var nameContainer = document.getElementById('gameName')
var releaseDate = document.getElementById('releaseDate')
var gameDesc = document.getElementById('description')

var coverImg = document.getElementById('backgroundImg')


var screenshot1 = document.getElementById('screenshotThumb1')
var screenshot2 = document.getElementById('screenshotThumb2')
var screenshot3 = document.getElementById('screenshotThumb3')
var screenshot4 = document.getElementById('screenshotThumb4')
var screenshot5 = document.getElementById('screenshotThumb5')
var screenshot6 = document.getElementById('screenshotThumb6')



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


    });
}

// function getApi(screenshotRequest) {
//   fetch(screenshotRequest)

//     .then(function(screenshotResponse) {
//       console.log(screenshotResponse)
//       return screenshotResponse.json();

//     })
//       .then(function (screenshotData) {
//         console.log(screenshotData);
//         screenshot1.setAttribute("src", screenshotData.results[1])
//         screenshot2.setAttribute("src", screenshotData.results[2])
//         screenshot3.setAttribute("src", screenshotData.results[3])
//         screenshot4.setAttribute("src", screenshotData.results[4])
//         screenshot5.setAttribute("src", screenshotData.results[5])
//         screenshot6.setAttribute("src", screenshotData.results[6])
      
      
//   })
// }

var btnResponse = ""

function initSearch() {

  let input = document.getElementById("searchInput").value;
  btnResponse = input;
  gameSlug = btnResponse.replace(/\s+/g, '-').toLowerCase();
  var requestUrl = 'https://api.rawg.io/api/games/' + gameSlug + '?key=09641c2e0fcd40ee8c29ef6543fe1103';
  // var screenshotRequest = 'https://api.rawg.io/api/games/' + gameSlug + '/screenshots?key=09641c2e0fcd40ee8c29ef6543fe1103'
  console.log(gameSlug)
  getApi(requestUrl);
  // getApi(screenshotRequest)
  console.log(requestUrl)
}


