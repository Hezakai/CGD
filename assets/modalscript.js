// results array fed by the APIs
var resultsArr = [
    {
        name: "Borderlands",
        pub: "Borderlands Pub",
        genre: "Borderlands Genre",
        studio: "Borderlands Studio",
        oPrice: "$49.99",
        sPrice: "$14.99",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Borderlandscover.jpg/220px-Borderlandscover.jpg",
        link: "https://www.cheapshark.com/redirect?dealID=Y3grZU9fHdHkzgjh%2BR8ThjRlw7T6kpDnszM3FwOduLs%3D"
    },
    {
        name: "XCOM 2",
        pub: "XCOM 2 Pub",
        genre: "XCOM 2 Genre",
        studio: "XCOM 2 Studio",
        oPrice: "$49.99",
        sPrice: "$4.99",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/XCOM_2_cover_art.jpg/220px-XCOM_2_cover_art.jpg",
        link: "https://www.cheapshark.com/redirect?dealID=IVj099Jarz6odiHw35jmGZyckpjmQeAmYI0%2BFyn8i1A%3D"
    },
    {
        name: "Back 4 Blood",
        pub: "Back 4 Blood Pub",
        genre: "Back 4 Blood Genre",
        studio: "Back 4 Blood Studio",
        oPrice: "$49.99",
        sPrice: "$32.89",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Back_4_Blood_cover_art.jpg/220px-Back_4_Blood_cover_art.jpg",
        link: "https://www.cheapshark.com/redirect?dealID=https://www.cheapshark.com/redirect?dealID=ESIIJCjm9wUuaO1hhZLZLgd7OS3qorpPmT44E70YSas%3D"
    }
]


var resultsBox = document.querySelector('.results-box')
var modals = document.getElementsByClassName('modal');
var closeModal = document.querySelector('.close')
var modalInfo = document.querySelector('.modal-info')

//X to close
closeModal.addEventListener('click', function () {
    modals[0].classList.add('hidden')
    modals[0].classList.remove('show')
})

populate()

//populates the result field from results array
function populate() {

    for (var i = 0; i < resultsArr.length; i++) {
        var resultDiv = document.createElement("div")
        var resultTitle = document.createElement("p")
        var resultsPrice = document.createElement("p")
        var resultsCover = document.createElement("img")

        //builds new div
        resultDiv.id = "card" + i;
        resultDiv.setAttribute("class", "resultCard")
        //div content
        resultsBox.appendChild(resultDiv)
        resultTitle.textContent = resultsArr[i].name
        resultTitle.setAttribute("class", "resultName text-center text-lg mb-3")
        resultsPrice.textContent = resultsArr[i].sPrice
        resultsPrice.setAttribute("class", "resultPrice text-center")
        resultsCover.setAttribute("class", "mx-10 mt-5 mb-3 object-cover h-96 w-64")
        resultsCover.setAttribute("src", resultsArr[i].cover)
        //adds results to new div
        resultDiv.append(resultsCover,resultTitle,resultsPrice,)



        //event listenr that pulls the game name clicked from the results field
        resultTitle.addEventListener('click', function (event) {
            var clicked = event.target.textContent

            var clickedObjectData = resultsArr.filter(item => item.name === clicked)

            console.log(clickedObjectData)

            populateModal(clickedObjectData)
        })

    }
}

//toggles modal on and fills with info
function populateModal(value) {
    modalInfo.textContent = ''
    //changes CSS
    modals[0].classList.remove('hidden')
    modals[0].classList.add('show')

    //builder variables
    var modalTitle = document.createElement('h2')
    var modalPub = document.createElement('h2')
    var modalGenre = document.createElement('h2')
    var modalStudio = document.createElement('h2')
    var modaloPrice = document.createElement('h2')
    var modalsPrice = document.createElement('h2')
    var modalLink = document.querySelector('#buyBtn')
    var modalCover = document.createElement("img")

    //what to build
    modalTitle.textContent = value[0].name
    modalPub.textContent = value[0].pub
    modalGenre.textContent = value[0].genre
    modalStudio.textContent = value[0].studio
    modaloPrice.textContent = value[0].oPrice
    modalsPrice.textContent = value[0].sPrice
    modalLink.setAttribute("href", value[0].link)
    modalCover.setAttribute("src", value[0].cover)

    //how to build
    modalInfo.append(modalTitle)
    modalInfo.append(modalPub)
    modalInfo.append(modalGenre)
    modalInfo.append(modalStudio)
    modalInfo.append(modaloPrice)
    modalInfo.append(modalsPrice)
    modalInfo.append(modalCover)
}

var btns = document.getElementsByClassName("openmodal");
