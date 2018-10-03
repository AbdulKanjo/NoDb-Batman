require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const main = require("./controllers/main_controller.js");
const app = express();
app.use(bodyParser.json());

app.post("/api/movie/", main.addFavs); //done
app.get("/api/movie", main.getmovie); //done
app.get("/api/movie/favorites", main.favoriteMovies); //change
app.put("/api/movie/:id", main.increment);
app.delete("/api/movie/:id", main.delete); //done
app.put("/api/movie/:id/-", main.decrement);
// app.delete("/api/movie/delete/:id", main.addBack);

const port = 3002;
app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
