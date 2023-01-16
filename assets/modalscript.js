// results array fed by the APIs
var resultsArr = [
    {
        name: "Borderlands",
        pub: "Borderlands Pub",
        genre: "Borderlands Genre",
        studio: "Borderlands Studio",
        oPrice: "Borderlands OPrice",
        sPrice: "Borderlands SPrice",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Borderlandscover.jpg/220px-Borderlandscover.jpg",
        link: "https://www.cheapshark.com/redirect?dealID=Y3grZU9fHdHkzgjh%2BR8ThjRlw7T6kpDnszM3FwOduLs%3D"
    },
    {
        name: "XCOM 2",
        pub: "XCOM 2 Pub",
        genre: "XCOM 2 Genre",
        studio: "XCOM 2 Studio",
        oPrice: "XCOM 2 OPrice",
        sPrice: "XCOM 2 SPrice",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/XCOM_2_cover_art.jpg/220px-XCOM_2_cover_art.jpg",
        link: "https://www.cheapshark.com/redirect?dealID=IVj099Jarz6odiHw35jmGZyckpjmQeAmYI0%2BFyn8i1A%3D"
    },
    {
        name: "Back 4 Blood",
        pub: "Back 4 Blood Pub",
        genre: "Back 4 Blood Genre",
        studio: "Back 4 Blood Studio",
        oPrice: "Back 4 Blood OPrice",
        sPrice: "Back 4 Blood SPrice",
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
        var resultTitle = document.createElement("p")
        var resultsPrice = document.createElement("p")
        var resultoPrice = document.createElement("p")
        var resultsCover = document.createElement("img")
        resultTitle.textContent = resultsArr[i].name
        resultTitle.setAttribute("class", "resultName")
        resultsPrice.textContent = resultsArr[i].sPrice
        resultsPrice.setAttribute("class", "resultPrice")
        resultoPrice.textContent = resultsArr[i].oPrice
        resultoPrice.setAttribute("class", "resultPrice")
        resultsCover.setAttribute("src", resultsArr[i].cover)
        resultsBox.append(resultTitle,resultsCover,resultsPrice,)


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
    //TODO ADD MODAL IMG & BUY BTN
    var modalPub = document.createElement('h2')
    var modalGenre = document.createElement('h2')
    var modalStudio = document.createElement('h2')
    var modaloPrice = document.createElement('h2')
    var modalsPrice = document.createElement('h2')
    // var modallink = document.querySelector('.butBtn')
    var modalCover = document.createElement("img")
    //what to build
    modalTitle.textContent = value[0].name
    modalPub.textContent = value[0].pub
    modalGenre.textContent = value[0].genre
    modalStudio.textContent = value[0].studio
    modaloPrice.textContent = value[0].oPrice
    modalsPrice.textContent = value[0].sPrice
    // modallink.setAttribute = (href, value[0].link)
    modalCover.setAttribute("src", value[0].cover)
    //how to build
    modalInfo.append(modalTitle)
    modalInfo.append(modalPub)
    modalInfo.append(modalGenre)
    modalInfo.append(modalStudio)
    modalInfo.append(modaloPrice)
    modalInfo.append(modalsPrice)
    // modalInfo.append(modallink)
    modalInfo.append(modalCover)
}

var btns = document.getElementsByClassName("openmodal");
