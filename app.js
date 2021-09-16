const express = require("express");
const path =  require("path");
const ejs = require("ejs");
const logs = require("morgan");

const app = express();

app.use(logs("dev"));

// configuring ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting up express
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// setting up express static files
app.use(express.static(path.join(__dirname, "public")));

// routes
const defaultRoutes = require("./routes/default/default.routes");
const postsRoutes = require("./routes/posts/posts.routes");
app.use("/", defaultRoutes);
app.use("/posts", postsRoutes);

// error handling
app.use((req, res, next) => {
    res.status(404).send("page not found");
})

app.listen(8000, () => {
    console.log("Server started at http://127.0.0.1:8000")
})