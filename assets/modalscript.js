// constructor function for building modals

// function Modal(Name, Pub, Genre, Studio, OPrice, SPrice) {
//     this.Pub = pub;
//     this.Genre = genre;
//     this.Studio = studio;
//     this.OPrice = OPrice;
//     this.SPrice = SPrice;
//     this.Link = Link;
//   }

// test obj for simulating the generated of search results to both HTML and modal will need to update with a constructor function later (new)
const testResultFromApi = {
    Name: "Call of Doody",
    Pub: "Craptivision",
    Genre: "First Person Squirter",
    Studio: "Infinity Turd",
    OPrice: "69.00",
    SPrice: "4.20",
    Cover: "./assets/imgs/COD.PNG",
    Link: "https://store.steampowered.com/"
}

// passes test obj to modal
$("#modalBtn").text(testResultFromApi.Name)
$("#modalName").text(testResultFromApi.Name)
$("#modalPub").text("Publisher: " + testResultFromApi.Pub)
$("#modalGenre").text("Genre: " + testResultFromApi.Genre)
$("#modalStudio").text("Studio: " + testResultFromApi.Studio)
$("#modalOPrice").text("Original Price: $" + testResultFromApi.OPrice)
$("#modalSPrice").text("Sale Price: $" + testResultFromApi.SPrice)
document.getElementById("modalCover").src=testResultFromApi.Cover;
$("#buyBtn").attr("href", testResultFromApi.Link)

//attch info to modal \ sibling p tag with name  
// data from both APIs, building HTML with tailwinds

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