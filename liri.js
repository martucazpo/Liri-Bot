
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var action = process.argv[2];

var nodeArgs = process.argv;

var thisName = "";


for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        thisName = thisName + "+" + nodeArgs[i];
    } else {
        thisName += nodeArgs[i];

    }

    console.log(thisName);
}

switch (action) {
    case "movie-this":
        movieThis();
        break;

    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "default":
        break;
}


// `concert-this`
function concertThis() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + thisName + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            var respond = response.data;
            console.log(respond);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });


}

function spotifyThisSong() {


    var queryUrl = "https://api.spotify.com/v1/search";

    axios.get(queryUrl).then(
        function (spotify) {


            var keys = require("./keys.js");

            var Spotify = require('node-spotify-api');

            var spotify = new Spotify(keys.spotify);

            spotify.search({ type: 'track', query: thisName }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                console.log(data);
            });


        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });


}

// `spotify-this-song`

function movieThis() {

    var queryUrl = "http://www.omdbapi.com/?t=" + thisName + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            var respond = response.data;
            console.log(respond);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });


};

// `do-what-it-says`