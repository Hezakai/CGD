const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ccb3e3c17msh9382fa8db07b55cp1aab70jsn6a45fceb609a',
		'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
	}
};

var gameTitle = "Borderlands"


fetch('https://cheapshark-game-deals.p.rapidapi.com/games?title=' + gameTitle, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));