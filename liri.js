
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var fs = require("fs");

var moment = require("moment");

var action = process.argv[2];

var noArgument = process.argv[3];

var nodeArgs = process.argv;

var thisName = "";


for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        thisName = thisName + "+" + nodeArgs[i];
    } else {
        thisName += nodeArgs[i];
    }
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

    case "do-what-it-says":
        doWhatItSays();
        break;

    default:
        break;
}


// `concert-this`
function concertThis() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + thisName + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            var respond = response.data;
            console.log("Lineup: " + JSON.stringify(respond[1].lineup));
            console.log("Location: " + respond[1].venue.name + ", " + respond[1].venue.city + ", " + respond[1].venue.country);
            console.log(moment(respond[1].datetime).format("MM/DD/YYYY"));
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

    spotify.search({ type: 'track', query: thisName, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var dti = data.tracks.items;
        var artists;
        var album;

        console.log(artists);

        for (j = 0; j < dti.length; j++) {

            artists = dti[j].album.artists;
            album = dti[j].album

            console.log("Song Title: " + thisName);
            console.log("Artists: " + artists);
            console.log("Album Name: " + album.name);
            console.log("Album Release Date: " + album.release_date);
        }

    });

}

// `spotify-this-song`

function movieThis() {

    var queryUrl = "http://www.omdbapi.com/?t=" + thisName + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            var respond = response.data;
            console.log("Movie Title: " + respond.Title);
            console.log("Year Movie Came Out: " + respond.Year);
            console.log("imdb Rating: " + respond.imdbRating);
            console.log("Rotten Tomatoes Rating: " + respond.Ratings[1].Value);
            console.log("Country: " + respond.Country);
            console.log("Primary Language: " + respond.Language);
            console.log("Plot: " + respond.Plot);
            console.log("Actors: " + respond.Actors);

        }
            .catch(function () {

                var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy";

                console.log(queryUrl);

                axios.get(queryUrl).then(
                    function (response) {
                        var respond = response.data;
                        console.log("Movie Title: " + respond.Title);
                        console.log("Year Movie Came Out: " + respond.Year);
                        console.log("imdb Rating: " + respond.imdbRating);
                        console.log("Rotten Tomatoes Rating: " + respond.Ratings[1].Value);
                        console.log("Country: " + respond.Country);
                        console.log("Primary Language: " + respond.Language);
                        console.log("Plot: " + respond.Plot);
                        console.log("Actors: " + respond.Actors);
                    })
            }));

      /*  .catch (function (error) {
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
    });*/

};

// `do-what-it-says`
function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        console.log(dataArr[1]);

        var action = dataArr[0];
        switch (action) {
            case "spotify-this-song":
                doSpotifySong();
            case "default":
                break;
        }

        function doSpotifySong() {

            var doSong = dataArr[1]
            console.log(doSong);

            spotify.search({ type: 'track', query: doSong }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                console.log(JSON.stringify(data, null, 2));
            });
        }



    });


}