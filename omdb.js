var request = require("request");


var command = process.argv[2];
var title = process.argv.slice(3);


title = title.toString();


if (command === "movie-this") {
    if (process.argv[3] === undefined) {
        title = "Mr. Nobody";
    }
    omdb();
}
//function of omdb info
function omdb() {

    //omdb url
    request("https://www.omdbapi.com/?t=" + title + "&y=plot=short&tomatoes=true&apikey=trilogy",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {

                //console.log(body);
                console.log("");
                console.log("The Movie Title is: " + JSON.parse(body).Title);
                console.log("");
                console.log("The Movie's Release Year is: " + JSON.parse(body).Year);
                console.log("The Movie's IMDB Rating is: " + JSON.parse(body).imdbRating);
                console.log("The Movie's Rotten Tomatoes Rating is: " + JSON.parse(body).tomatoRating);
                console.log("The Movie Was Produced in: " + JSON.parse(body).Country);
                console.log("The Movie Language is: " + JSON.parse(body).Language);
                console.log("The Plot: " + JSON.parse(body).Plot);
                console.log("");
                console.log("The Movie Cast is: " + JSON.parse(body).Actors);
                console.log("");
            }
            else {
                console.log("Couldn't find that movie.")
            }
        });
}

module.exports = omdb;