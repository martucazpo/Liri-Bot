# Liri-Bot

Liri-Bot is a javascript console based application that helps the user make queries as to concert times and locations as well as gather information about movies and about songs. Liri-Bot has four components. The first is concerned with movies and is called "movie-this". The second is called "concert-this", and gives out concert information. The third is called "spotify-this-song" and uses the spotify API to gather information about a song. The final function of Liri-Bot is called "do-what-it-says", this function performs actions based not on direct user input, but rather from instructions written on another file.

The user accesses Liri-Bot from the console, where he or she navigates to the folder where the Liri-Bot is stored. The user then types "node liri.js" into the console. Next, the user can choose one of four opperations:

### movie-this

To access movie information the user types **movie-this** into the console, followed by the name of the movie in quotes. At this point the console should read **node liri.js movie-this "name of movie"**. When the user pushes enter, information about the movie appears, including the title of the movie, the year the movie came out, the IMDB rating of the movie, the Rotten Tomatoes rating of the movie, the country where the movie was produced, the language of the movie, the plot of the movie, and the actors in the movie.

### concert-this

As with *movie-this* the user types **node liri.js concert-this** into the console followed by the name of the band about which he or she is inquiring. Upon hitting enter the console will return the musical lineup, the name of the venue where the group is to perform, as well as its location. The date of the event will also be displayed.

### spotify-this-song

