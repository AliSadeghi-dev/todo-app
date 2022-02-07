const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/static");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminRoute = require("./routes/admin");
const todosRoute = require("./routes/index");
const sequelize = require("./utils/database");
//statics
setStatics(app);
//End statics

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End EJS

app.use("/admin", adminRoute);
app.use(todosRoute);

sequelize
    .sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log("Server in runing on port 3000.");
        });
    })
    .catch((err) => {
        console.log(err);
    });