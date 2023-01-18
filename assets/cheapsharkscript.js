let gameID = ""
var dealsArr = []
var btnResponse = "Borderlands 2"
var modals = document.getElementsByClassName('modal');
var closeModal = document.querySelector('.close')
var modalInfo = document.querySelector('.modal-info')
var btns = document.getElementsByClassName("openmodal");
var keyArr = ['2ca9e05eb2mshaad55f69b7a7e24p152fdajsn1f4c0544ad64',
  '4ccb3e3c17msh9382fa8db07b55cp1aab70jsn6a45fceb609a', 'eaaa813926msh7bc3448e9439517p1e2fffjsn1e58d3a059e7']
var requestOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': keyArr[1],
    'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
  }
};

//gets the cheapshark ID of the game to better search for that specific game and then calls fetchGameInfo
function fetchID() {
  fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=' + btnResponse + '&sortBy=title&pageSize=3&exact=true', requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      gameID = data[0].gameID
      fetchGameInfo(gameID)
    });
}

//uses the cheapshark ID to pull all stores with the game for sale
function fetchGameInfo(value) {
  fetch('https://cheapshark-game-deals.p.rapidapi.com/games?id=' + value, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("fetchGameInfo data:")
      dealsArr = data.deals
      console.log(dealsArr)
      modalContent.innerHTML = "";
      //modal builder
      for (let zx = 0; zx < dealsArr.length; zx++) {
        console.log(dealsArr[zx])
        var dealDiv = document.createElement("div")
        var dealLink = document.createElement("p")
        var dealStore = document.createElement("p")
        var dealOPrice = document.createElement("p")
        var dealSPrice = document.createElement("p")
        
        dealLink.textContent = dealsArr[zx].dealID
        dealStore.textContent = dealsArr[zx].storeID
        dealOPrice.textContent = dealsArr[zx].retailPrice
        dealSPrice.textContent = dealsArr[zx].price
        //builds new div
        dealDiv.setAttribute("id", "sale" + zx)
        dealDiv.setAttribute("class", "deal")

        modalContent.appendChild(dealDiv)
        //adds results to new div
        dealDiv.append(dealLink, dealStore, dealOPrice, dealSPrice)
      }
    });

}

//function called when Button Clicked
function initSearch() {
  let input = document.getElementById("searchInput").value;
  btnResponse = input;
  fetchID()
}

//X to close
closeModal.addEventListener('click', function () {
  modals[0].classList.add('hidden')
  modals[0].classList.remove('show')
})

//event listener for sales button
sales.addEventListener('click', function (event) {
  modals[0].classList.remove('hidden')
  modals[0].classList.add('show')
})
