var gameSlug = ""

var screenshot1 = document.getElementById('screenshot1')
var screenshot2 = document.getElementById('screenshot2')
var screenshot3 = document.getElementById('screenshot3')
var screenshot4 = document.getElementById('screenshot4')
var screenshot5 = document.getElementById('screenshot5')





function getscreenshotApi(screenshotRequest) {
  fetch(screenshotRequest)

    .then(function(screenshotResponse) {
      console.log(screenshotResponse)
      return screenshotResponse.json();

    })
      .then(function (screenshotData) {
        console.log(screenshotData);
        screenshot1.setAttribute("src", screenshotData.results[0].image)
        screenshot2.setAttribute("src", screenshotData.results[1].image)
        screenshot3.setAttribute("src", screenshotData.results[2].image)
        screenshot4.setAttribute("src", screenshotData.results[3].image)
        screenshot5.setAttribute("src", screenshotData.results[4].image)
      
      
  })
}

function screenshotSearch() {

    let input = document.getElementById("searchInput").value;
    btnResponse = input;
    gameSlug = btnResponse.replace(/\s+/g, '-').toLowerCase();
    var screenshotRequest = 'https://api.rawg.io/api/games/' + gameSlug + '/screenshots?key=09641c2e0fcd40ee8c29ef6543fe1103'
    getscreenshotApi(screenshotRequest);
    console.log(screenshotRequest)
}