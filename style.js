var grid = document.querySelector(".grid-container");


if (localStorage.getItem("movies")) {
  var localData = JSON.parse(localStorage.getItem("movies"));
  localData.forEach(function(movie) {
    createCard(movie);
  });
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    data.forEach(function(movie) {
      createCard(movie);
    });
  }
};
xhttp.open("GET", "movies.json", true);
xhttp.send();


function createCard(movie) {
  let card = document.createElement("div");
  card.classList.add("card");

  
  let movieImg = movie.thumbnail || movie.imgSrc || "";
  
  let genresHTML = movie.genres 
    ? movie.genres.map(g => `<span class="genre">${g}</span>`).join("") 
    : "";

  let castText = movie.cast && movie.cast.length > 0 
    ? movie.cast.slice(0, 3).join(", ") 
    : "N/A";

  card.innerHTML = `
    <div class="card-image" style="background-image: url('${movieImg}')"></div>
    <div class="card-content">
      <div class='movie-title'>${movie.title}</div>
      <div class='movie-year'>${movie.year}</div>
      <div class="genres">${genresHTML}</div>
      <div class='movie-cast'>Cast: ${castText}</div>
    </div>
  `;
  
  grid.appendChild(card);
}
  
  const form = document.getElementById("movieForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const movie = {
      title: document.getElementById("titleInput").value,
      year: document.getElementById("yearInput").value,
      thumbnail: document.getElementById("imgInput").value,
      cast: [],
      genres: []
    };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    window.location.href = "index.html";
    if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

  });
