import "./db.json";
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Create the express app
const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const route = require("./routes/Routes")
app.use("/", routes)



// util functions
const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(data, stringifyData)
}

const getData = (data) => {
    const jsonData = fs.readFileSync(data)
    return JSON.parse(jsonData)
}

// start server
app.listen(3000, () => {
    console.log(`Server started at port http://localhost:3000`);
});