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
                //I need a for loop to go through these twitter responses
                for(var i = 0; i < (tweets.text) in tweets) {
                    console.log("* " + tweets[i].text);
                    console.log("- " + tweets[i].created_at);
                }
                //console.log("* " + tweets[0].text);
                //console.log("- " + tweets[0].created_at);
                //console.log("* " + tweets[1].text);
                //console.log("- " + tweets[1].created_at);
                //console.log("* " + tweets[2].text);
                //console.log("- " + tweets[2].created_at);
                //console.log("Tweet " + tweets[3].text);
                //console.log("Tweet " + tweets[4].text);
                //console.log("Tweet " + tweets[5].text);


            }
            else {
                //error handling
                console.log("error " + error);
            }
        }
    );

};
module.exports = tweets;
