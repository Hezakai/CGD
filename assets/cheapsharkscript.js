var keyArr = ['2ca9e05eb2mshaad55f69b7a7e24p152fdajsn1f4c0544ad64',
'4ccb3e3c17msh9382fa8db07b55cp1aab70jsn6a45fceb609a','eaaa813926msh7bc3448e9439517p1e2fffjsn1e58d3a059e7']

var requestOptions ={
    method: 'GET',
    redirect: 'follow',
    headers: {
      'X-RapidAPI-Key': keyArr[1],
      'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
    }
};


  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // <<<<<<< stupidfuckingbutton
    function getGameID() {
    fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?title='+ titleArr + '&exact=1&output=json&sortBy=Deal%20Rating&pageSize=10&onSale=true', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    }
    
    getGameID()
    
    // =======

    var titleArr=["kandria"]

    function getGameID() {
      for (let i = 0; i < titleArr.length; i++) {
        fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?title='+ titleArr[i] + '&exact=1&output=json&sortBy=Price&onSale=true', requestOptions)
        .then(response => response.json())
        .then(response => { 
          console.log(response)
          console.log(response[0].dealID + " " + response[0].normalPrice + " " + response[0].salePrice)
          
        })
        
        .catch(err => console.error(err));
      }
    }
    
    
    getGameID();

