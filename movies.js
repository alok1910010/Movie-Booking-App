var wallet = JSON.parse(localStorage.getItem("amount")) || [];

displaytot(wallet);
function displaytot(wallet){
    wallet.map(function(e){
        var h1 = document.getElementById("wallet");
        h1.innerText = e.amon
    })
}

async function gettrend() {
    var res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9a46379fa6eca9aa1314b46973b7873e");
    var res1 = await res.json();
    displaytrend(res1.results)
}
gettrend()

function displaytrend(data) {
    var dis = document.getElementById("movies");
    data.map(function (e) {
        var div = document.createElement("div");
        div.setAttribute("class", "movie_tab")
        var div1 = document.createElement("div");
        var image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w300${e.poster_path}`
        div1.append(image);
        var title = document.createElement("h3");
        title.innerText = e.title;
        var btn = document.createElement("button");
        btn.setAttribute("class","book_now")
        btn.innerText="Book Now"
        btn.addEventListener("click",()=>{
            redirect(e);
        })
        div.style.textAlign = "center";
        div.append(div1, title,btn );
        dis.append(div);
    })
}

var movie = JSON.parse(localStorage.getItem("movie")) || [];

function redirect(e) {
    movie.push(e);
    localStorage.setItem("movie",JSON.stringify(movie));
    window.location.href="checkout.html"
}
// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
