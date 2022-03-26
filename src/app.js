const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//MiddLewares
app.use(morgan("dev"));

//Routes
app.use(require("./routes/index.js"));

//Estatic Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.set("port"), function() {
    console.log("Server on port ", app.set("port"));
})