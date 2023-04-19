const { writeToFile } = require("../util/write-to-file");
const crypto = require("crypto");
let movies = require("../models/movies.json");

//? Método GET geral
function getMovies(req, res) {
    res.status(200).json(movies);
}

//? Método GET específico
function getMovie(req, res) {
    const movieId = req.params.movieId;
    const movie = movies.find((movie) => movie.id === movieId);

    if (movie !== undefined) res.status(200).json(movie);
    else
        res.status(404).json({
            error: "Movie not found",
        });
}

//? Método POST
function postMovie(req, res) {
    if (
        !req.body.title ||
        !req.body.year ||
        !req.body.genre ||
        !req.body.rating
    ) {
        return res.status(404).json({
            error: "Missing movie informations",
        });
    }

    const newMovie = {
        id: crypto.randomUUID(),
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating,
    };

    movies.push(newMovie);
    writeToFile(movies);

    res.status(201).json(newMovie);
}

//? Método DELETE
function deleteMovie(req, res) {
    const movieId = req.params.movieId;
    const movie = movies.find((movie) => movie.id === movieId);

    if (movie !== undefined) {
        const idx = movies.findIndex((movie) => {
            return movie.id === movieId;
        });

        if (idx != -1) {
            movies.splice(idx, 1);
            writeToFile(movies);
            res.status(200).json(movie);
        } else res.status(404).json({ error: "Movie not found" });
    } else res.status(404).json({ error: "Movie not found" });
}

//? Método PUT
function putMovie(req, res) {
    const movieId = req.params.movieId;
    const movie = movies.find((movie) => movie.id === movieId);

    if (movie !== undefined) {
        const idx = movies.findIndex((movie) => {
            return movie.id === movieId;
        });

        if (idx != -1) {
            //! Fazer as mudanças no filme
            let movieChanges = {
                id: movieId,
                title: req.body.title,
                year: req.body.year,
                genre: req.body.genre,
                rating: req.body.rating,
            };
            for (info in movies[idx]) {
                if (movieChanges[info] != "")
                    movies[idx][info] = movieChanges[info];
            }

            //movies[idx] = { id: movieId, ...req.body };
            writeToFile(movies);
            res.status(200).json(movie);
        } else res.status(404).json({ error: "Movie not found" });
    } else res.status(404).json({ error: "Movie not found" });

    if (
        !req.body.title ||
        !req.body.year ||
        !req.body.genre ||
        !req.body.rating
    ) {
        return res.status(404).json({
            error: "Missing movie informations",
        });
    }

    console.log("teste");
}

module.exports = {
    getMovies,
    getMovie,
    postMovie,
    deleteMovie,
    putMovie,
};
