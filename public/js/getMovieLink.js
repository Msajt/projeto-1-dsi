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
