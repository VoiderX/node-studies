const request = require('request');
const converter = require('temp-units-conv');

var localWeather = (latitude, longitude, callback) => {
    latitude = encodeURIComponent(latitude);
    longitude = encodeURIComponent(longitude);
    request({
        url: `https://api.darksky.net/forecast/ebcd2b73bad7d83cf04cb93978aeea99/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect");
        }
        else if (response.statusCode === 400) {
            callback("Unable to fetch weather!");
        } else {
            callback(undefined,
                {
                    temperature:converter.fahrenheitToCelsius(body.currently.temperature),
                    apparentTemperature:converter.fahrenheitToCelsius(body.currently.apparentTemperature)
                });
        }

    });
    //console.log(`https://api.darksky.net/forecast/ebcd2b73bad7d83cf04cb93978aeea99/${latitude},${longitude}`);
};

module.exports = ({
    localWeather
});
//https://api.darksky.net/forecast/ebcd2b73bad7d83cf04cb93978aeea99/-23.197833,-50.6378804