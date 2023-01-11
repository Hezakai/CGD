// constructor function for building modals

// function Modal(Name, Publ, Genre, Studio, OPrice, SPrice) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

// test obj for simulating the generated of search results to both HTML and modal will need to update with a constructor function later (new)
const testResultFromApi = {
    Name: "Call of Dooky",
    Pub: "Craptivision",
    Genre: "First Pooper Shooter",
    Studio: "Infinity Turd",
    OPrice: "69.69",
    SPrice: "4.20",
}

// passes test obj to modal
$("#modalBtn").text(testResultFromApi.Name)
$("#modalName").text(testResultFromApi.Name)
$("#modalPub").text("Publisher: " + testResultFromApi.Pub)
$("#modalGenre").text("Genre: " + testResultFromApi.Genre)
$("#modalStudio").text("Studio: " + testResultFromApi.Studio)
$("#modalOPrice").text("Original Price: $" + testResultFromApi.OPrice)
$("#modalSPrice").text("Sale Price: $" + testResultFromApi.SPrice)

//modal script
var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("openmodal");
var spans=document.getElementsByClassName("close");
for(let i=0;i<btns.length;i++){
    btns[i].onclick = function() {
        modals[i].style.display = "block";
    }
}
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}