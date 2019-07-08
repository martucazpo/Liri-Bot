# Liri-Bot

Liri-Bot is a javascript console based application that helps the user make queries as to concert times and locations as well as gather information about movies and about songs. Liri-Bot has four components. The first is concerned with movies and is called "movie-this". The second is called "concert-this", and gives out concert information. The third is called "spotify-this-song" and uses the spotify API to gather information about a song. The final function of Liri-Bot is called "do-what-it-says", this function performs actions based not on direct user input, but rather from instructions written on another file.

The user accesses Liri-Bot from the console, where he or she navigates to the folder where the Liri-Bot is stored. The user then types "node liri.js" into the console. Next, the user can choose one of four opperations:

### movie-this

To access movie information the user types **movie-this** into the console, followed by the name of the movie in quotes. At this point the console should read **node liri.js movie-this "name of movie"**. When the user pushes enter, information about the movie appears, including the title of the movie, the year the movie came out, the IMDB rating of the movie, the Rotten Tomatoes rating of the movie, the country where the movie was produced, the language of the movie, the plot of the movie, and the actors in the movie.

### concert-this

As with *movie-this* the user types **node liri.js concert-this** into the console followed by the name of the band about which he or she is inquiring. Upon hitting enter the console will return the musical lineup, the name of the venue where the group is to perform, as well as its location. The date of the event will also be displayed.

### spotify-this-song

Rather than doing something bold and invasive with music, as the name might imply, this function does a gentle search of the Spotify music data base. Like *movie-this* and *concert-this* the user enters **node liri.js** into the console, followed by **spotify-this-song** a space and the songs name in quotes. (i.e. **node liri.js spotify-this-song "my song"**). As many songs are performed by different artists, or performed by the same artist but in a different way, when the user presses enter he or she will recieve five returns on the song query. Each return will have the song's name, a preview link of the song (if available), the album that the song is from, and a return from Spotify called a *simple artist object* that has the artist's or artists' name(s).

### do-what-it-says

Unlike the previous three functions, *do-what-it-says* does not directly recieve user input. The commands for *do-what-it-says* are the other three functions performed by Liri-Bot, namely: *movie-this* , *concert-this* and *spotify-this-song*. the parameters each function will fulfill, however are written in a separate text file. This file has commands such as *movie-this* as well as the name of the movie to recieve that action.

Like its predecessors however, the user still needs to navigate to Liri-Bot in the console. There he or she types, as always, **node liri.js** followed by the command **do-what-it-says**. Unlike the previous three functions, at this point the user presses enter. What follows is a printed copy of the text file and the returns of the functions therein contained.

In its current incarnation, the Liri-Bot needs to have its text file changed manually, but in future versions the text file could be made into an object, with the keys as commands and the values as queries. This could be usefull, for example, if a text file or an email could be sent to another computer and then those commands could be carried out by the liri-node-app in the console.

