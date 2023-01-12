var keyArr = ['2ca9e05eb2mshaad55f69b7a7e24p152fdajsn1f4c0544ad64',
'4ccb3e3c17msh9382fa8db07b55cp1aab70jsn6a45fceb609a','eaaa813926msh7bc3448e9439517p1e2fffjsn1e58d3a059e7']

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': keyArr[1],
		'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
	}
};

var titleArr = ["Kandria"]
var apiResponse

//steam is store 0 or 1

function getGameID() {
	for (let i = 0; i < titleArr.length; i++) {
		fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?title='+ titleArr[i] + '&exact=1&output=json&sortBy=Price&onSale=true', options)
		.then(response => response.json())
		.then(response => console.log(response[0].dealID + " " + response[0].normalPrice + " " + response[0].salePrice))
		.catch(err => console.error(err));
	}
}


getGameID()


// fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?title=borderlands 2&exact=1&output=json&sortBy=Deal%20Rating&pageSize=10&onSale=true', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));