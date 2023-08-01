var express = require('express');
var app = express();
const mongoose = require("mongoose");

app.get('/', function (req, res) {
    res.send('Hello Wonpm i mongooserld!');
});

var mongoURI = "mongodb://localhost/demos"

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() =>
            console.log("Connected to mongo Successful")
        )
}


module.exports = connectToMongo;
app.listen(8000, function () {
    mongoose.connect(mongoURI)
        .then(() =>
            console.log("Connected to mongo Successful")
        )
    console.log('Listening to Port 8000');
});
