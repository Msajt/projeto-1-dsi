const PORT = 8001;

function showGetMovies() {
    let status;

    fetch(`http://localhost:${PORT}/movies`, {
        method: "GET",
    })
        .then((res) => {
            status = res.status;
            showDataStatusOnScreen(status, "Filmes encontrados");

            return res.text();
        })
        .then((txt) => showDataOnScreen(txt));
}

function showGetMovie() {
    let movieId = document.getElementById("get-movie-id").value;
    let status;

    if (movieId === "")
        return showDataStatusOnScreen(404, "ID não especificado");

    fetch(`http://localhost:${PORT}/movies/${movieId}`, {
        method: "GET",
    })
        .then((res) => {
            status = res.status;
            showDataStatusOnScreen(status, "Filme encontrado");

            return res.text();
        })
        .then((txt) => showDataOnScreen(txt));
}

function showDeleteMovie() {
    let movieId = document.getElementById("get-movie-id").value;
    let status;

    if (movieId === "")
        return showDataStatusOnScreen(404, "ID não especificado");

    fetch(`http://localhost:${PORT}/movies/${movieId}`, {
        method: "DELETE",
    })
        .then((res) => {
            status = res.status;
            showDataStatusOnScreen(status, "Deletado");

            return res.text();
        })
        .then((txt) => showDataOnScreen(txt));
}

async function getMovieInfo(movie) {
    let { title, genre, year, rating } = movie;
    let movieImage = await getMovieLink(title);
    let text = `
        
            <img src="${movieImage}">
            <h3>${title}</h3>
            ${genre}<br>
            ${year}<br>
            ${rating}<br>
        
    `;

    return text;
}

async function showDataOnScreen(text) {
    let content = document.querySelector("#movies-content");
    let textToJSON = JSON.parse(text);
    let textToHTML = "";

    if (Array.isArray(textToJSON)) {
        for (let i = 0; i < textToJSON.length; i++) {
            textToHTML += `<div id="movies-list">${await getMovieInfo(
                textToJSON[i]
            )}</div>`;
        }
    } else {
        textToHTML = `<div id="movie-list">${await getMovieInfo(
            textToJSON
        )}</div>`;
    }

    content.innerHTML = textToHTML;
}

function showDataStatusOnScreen(status, text) {
    let content = document.querySelector("#server-status");
    if (status >= 200 && status < 300) {
        content.style.background = "rgb(25, 222, 71)";
        content.innerHTML = `<h2>HTTP ${status} - ${text}</h2>`;
    } else if (status >= 400 && status < 500) {
        content.style.background = "rgb(254, 47, 36)";
        content.innerHTML = `<h2>HTTP ${status} - ${text}</h2>`;
    }
}

async function getMovieLink(title) {
    let movieInfo = await fetch(
        `http://www.omdbapi.com/?s=${title}&apikey=dd90ecf7`
    )
        .then((res) => res.text())
        .then((txt) => JSON.parse(txt))
        .catch((err) => {
            console.log(err);
            console.log("Houve um erro");
        });

    let movieImage;

    if (
        JSON.stringify(movieInfo) !=
        '{"Response":"False","Error":"Movie not found!"}'
    ) {
        movieImage = movieInfo["Search"][0]["Poster"];
    } else {
        movieImage =
            "https://m.media-amazon.com/images/M/MV5BYWU2MjYzMWItMTcyMy00ZThhLTkzMzktZjdkNDJhYzg0MjI3XkEyXkFqcGdeQXVyMjY2Njg1MTQ@._V1_SX300.jpg";
    }

    return movieImage;
}
