var Spotify = require("node-spotify-api");
var command = process.argv[2];
var title = process.argv.slice(3);

title = title.toString();
if (command === "spotify-this-song") {
    songStuff();
}
function songStuff(){
    if(process.argv[3] === undefined){
        title = "the sign ace of base";
        }
 
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
module.exports = songStuff;