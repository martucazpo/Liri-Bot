# Liri-Bot

Liri-Bot is a javascript console based application that helps the user query concerts, movies and songs. Liri-Bot has four components.

* The first is concerned with movies and is called "movie-this". 
* The second is called "concert-this", and gives out concert information. 
* The third is called "spotify-this-song" and uses the spotify API to gather information about a song. 
* The final function of Liri-Bot is called "do-what-it-says", this function performs actions based not on direct user input, but rather from instructions written on another file.

The user accesses Liri-Bot from the console and navigates to the folder where the Liri-Bot is stored. The user then types "node liri.js" into the console and chooses one of four opperations:

### movie-this

To access movie information the user types **movie-this** into the console, followed by the name of the movie in quotes. The console should read **node liri.js movie-this "name of movie"**. When the user pushes enter, information about the movie appears: 

* the title of the movie, 
* the year the movie came out, 
* the IMDB rating of the movie, 
* the Rotten Tomatoes rating of the movie, 
* the country where the movie was produced, 
* the language of the movie, 
* the plot of the movie,
* the actors in the movie.

If no movie has been entered after the command *movie-this*, Liri-Bot will return the data for *Mr.Nobody*.

Here is a screenshot that returns the input for "Sleeping Beauty":
![Screenshot (8).png](images\Screenshot (8).png)

### concert-this

As with *movie-this* the user types **node liri.js concert-this** into the console followed by the name of the band about which he or she wishes to inquire. Upon hitting enter, the console will return 

* the musical lineup, 
* the name of the venue where the group is to perform, as well as its location. 
* The date of the event will also be displayed. 

If no group is entered for Liri-bot to concert-this, Celine Dion will be returned as the default performer.

This is a screenshot that Liri-Bot returned for concert-this "Wayne Newton":
![Screenshot (9).png](images\Screenshot (9).png)

### spotify-this-song

This function does a search of the Spotify music data base. Like *movie-this*, and *concert-this*, the user enters **node liri.js** into the console, followed by **spotify-this-song**, a space, and the songs name in quotes. (i.e. **node liri.js spotify-this-song "my song"**). As many songs are performed by different artists, or performed by the same artist but in a different way, when the user presses enter he or she will recieve five returns on the song query. Each return will have: 

* the song's name, 
* a preview link of the song (if available), 
* the album that the song is from,
* the artist's or artists' name(s). 

If no song name is entered after *spotify-this-song*, *The Sign* by *Ace of Base* will be returned.

Liri-Bot returned this for *spotify-this-song* "My Sharona":
![Screenshot (10).png](images\Screenshot (10).png)

### do-what-it-says

Unlike the previous three functions, *do-what-it-says* does not directly recieve user input. The commands for *do-what-it-says* are the other three functions performed by Liri-Bot, namely: *movie-this* , *concert-this* and *spotify-this-song*. the parameters each function will fulfill, however are written in a separate text file. This file has commands such as *movie-this* as well as the name of the movie to recieve that action.

Like its predecessors the user will still need to navigate to Liri-Bot in the console. Once there, he or she types, **node liri.js**, followed by the command: **do-what-it-says**.
 Unlike the previous three functions, at this point the user presses enter. What follows is a printed copy of the text file and a return of the functions therein contained.

In its current incarnation, the Liri-Bot needs to have its text file changed manually, but in future versions the text file could be made into an object, with the keys as commands and the values as queries. This could be usefull, for example, if a text file or an email could be sent to another computer and then those commands could be carried out by the liri-node-app in the console.

This is a screenshot of node liri.js do-what-it-says :
![Screenshot (11).png](images\Screenshot (11).png)

## Demo Video:

The following is a demo video of Liri-Bot performing all of its functions. Additionally it demonstrates the default returns.

[Google Classroom Link](https://classroom.google.com/c/NDA4MzkyNjA4MzJa/m/NDA4MzgyNTIxNjFa/details)