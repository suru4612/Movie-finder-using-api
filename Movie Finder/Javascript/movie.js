const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=95c8f87f&s=";
const API_URL_SEARCH = "http://www.omdbapi.com/?i=tt3896198&apikey=61f894f6";

var search_input = document.getElementById("search_input");
var card = document.getElementByClassName("movie-cards")[0];

document.getElementByClassName("search")[0].addEventListner("click",function(){
    console.log(search_input.value);
    const query= search_input.value;
    if(query){
        getmovies(API_URL+query);
    }
});

async function getmovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData.Search);
}

function showMovies(movies){
    card.innerHtml= "";
    movies.forEach(async function(movie){
        const movieData = await fetch(API_URL_SEARCH+imdbID);
        const movieDataobj = await movieData.json();
        movie_display(movieDataobj);
    })
}

function movie_display(imovie){
    const movieElm = document.createElement("div");
    movieElm.classList.add("movie-card");
    movieElm.innerHtml=`
     <div class= "card">
     <img src= "${imovie.Poster}" alt = "Poster" width = "300px" height = "300px" />
     <br>
     <div class= "movie_description">
     <span class= "movie-title"><b>Title</b><span class="value">${imovie.Title}</span></span>
     <span class= "movie-title"><b>Rating</b><span class="value">${imovie.imdbRating}</span></span>
     <span class= "movie-title"><b>Director</b><span class="value">${imovie.Director}</span></span>
     <span class= "movie-title"><b>Released</b><span class="value">${imovie.Released}</span></span>
     <span class= "movie-title"><b>Genre</b><span class="value">${imovie.Genre}</span></span>
        </div>
     </div>
     `;
     card.appendChild(movieElm);    
}
    