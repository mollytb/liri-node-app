var Twitter = require("twitter");
var command = process.argv[2];
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

if (command === "my-tweets") {
    tweets();
}
function tweets() {
    client.get(
        "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=gabriadarkholme&count=20",

        function (error, tweets) {
            if (!error) {
                //for loop to go through these twitter responses
                for (var i = 0; i < tweets.length; i++) {
                    console.log("");
                    console.log(tweets[i].created_at);
                    console.log(tweets[i].text);

                }



            }
            else {
                //error handling
                console.log("error " + error);
            }
        }
    );

};
module.exports = tweets;
