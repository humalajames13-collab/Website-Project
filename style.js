console.log("js console");

var data;
var grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

data = JSON.parse(xhttp.responseText);
console.log(data);

data.forEach (function(movies){
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
    "<div class='movie-title'>" + movies.title + "</div>" +
    "<span>" +
    "cast:" + movies.cast + "<br>" + 
    "Needs Research:" +
    "</span>";
    
    card.innerHTML = textData;

    if(movies.imgSrc){
        card.style.backgroundImage = "url("+ movies.imgSrc +")";
    }
    grid.appendChild(card);
});

}
};

xhttp.open("GET", "movies.json",true);
xhttp.send();
let genresHTML = movies.genres
  ? movies.genres.map(g => `<span class="genre">${g}</span>`).join("")
  : "";

let textData = `
  <div class="card-content">
    <h3 class="movie-title">${movies.title}</h3>
    <p class="movie-year">${movies.year}</p>
    <div class="genres">${genresHTML}</div>
    <p class="movie-cast">${movies.cast.slice(0, 3).join(", ")}...</p>
  </div>
`;
FormData.addEventListener("submit",function(e){
  e.preventDefault();
  let title = titleInput.value;
  let publisher = devInput.value;
  let releaseDate = releaseDataInput.value;
  let gifSrc = gifInput.value;
  let imgSrc = imgInput.value;
  let newObj = {
    "id":getNextId(),
    "title": title,
    "publisher":publisher,
    "releaseDate":releaseDate,
    "imgSrc":imgSrc,
    "giftSrc":gifSrc};
    submitData(newObj);
    FormData.reset();

  });
