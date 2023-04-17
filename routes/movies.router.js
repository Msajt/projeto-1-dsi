const express = require("express");
const moviesController = require("../controllers/movies.controller");

//! Definindo a rota dos filmes
const moviesRouter = express.Router();

//? MÉTODO GET (todos os filmes)
moviesRouter.get("/", moviesController.getMovies);
//? MÉTODO GET (filme específico)
moviesRouter.get("/:movieId", moviesController.getMovie);
//? MÉTODO POST (lista um novo filme)
moviesRouter.post("/", moviesController.postMovie);
//? MÉTODO DELETE (deleta um filme)
moviesRouter.delete("/:movieId", moviesController.deleteMovie);

module.exports = moviesRouter;
