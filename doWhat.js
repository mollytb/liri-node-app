var Spotify = require("node-spotify-api");
var liri = require("./liri.js");
var fs = require("fs");
var spotify = require("./spotify.js");
var omdb = require("./omdb.js");
var twitter = require("./twitter.js");
var command = process.argv[2];

if (command === "do-what-it-says") {
    doWhat();
}
function doWhat() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (!error) {
            doWhatResults = data.split(",");
            command = doWhatResults[0];
            title = doWhatResults[1];
            if (command === "movie-this") {
                omdb();
            }
            if (command === "spotify-this-song") {
                songStuff();
                //console.log("should spotify");
            }
            if (command === "my-tweets") {
                tweets();
            }
            console.log(command);
            console.log(title);
        } else {
            console.log("Error occurred" + error);
        }
    });


};
function songStuff(){
 
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});


spotify.search( {type: "track", query: title }, function(err, data) {
    
    if ( err ) {
      console.log("error " + err);
      return;  
  }

  else{
  var songInfo = data.tracks.items[0];
    console.log("Artist: " + songInfo.artists[0].name);
    console.log("Title: " + songInfo.name);
    console.log("Album: " + songInfo.album.name);
    console.log("Link to snippet: " + songInfo.preview_url);
    
  };
});
};
