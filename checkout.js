var wallet = JSON.parse(localStorage.getItem("amount")) || [];
var cash=0;
var h1 = document.getElementById("wallet");
displaytot(wallet);
function displaytot(wallet){
    wallet.map(function(e){
        h1.innerText = e.amon
        cash = e.amon;
    })
}

document.getElementById("confirm").addEventListener("click", book);
function book(){
  var seats = document.getElementById("number_of_seats").value
  var total = seats*100;
  if(cash>=total){
    cash=Number(cash)-Number(total);
    h1.innerText = cash;
    var amo = {
        amon:cash
    }
    wallet.push(amo);
    localStorage.setItem("amount",JSON.stringify(wallet))
    alert("Booking Successfull")
  }
  else{
    alert("Insufficient Balance !")
  }
}

var movie = JSON.parse(localStorage.getItem("movie")) || [];

display(movie);
function display(movie) {
    var dis = document.getElementById("movie");
    movie.map(function(e){
        var div = document.createElement("div");
        var div1 = document.createElement("div");
        var image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w300${e.poster_path}`
        div1.append(image);
        var title = document.createElement("h3");
        title.innerText = e.title;
        div.append(div1, title);
        dis.append(div);
    })
}
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
