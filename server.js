require("dotenv").config(); //! Definindo funcionamento do .env
const cors = require("cors");
const express = require("express");
const moviesRouter = require("./routes/movies.router.js");

const app = express(); //! Definindo servidor
const PORT = process.env.PORT || 8002; //! Definindo a porta

app.use(cors());
app.use(express.json()); //! Transformar post em json

app.use("/movies", moviesRouter);

//! Servidor ouvindo na porta definida
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
