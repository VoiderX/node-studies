
const yargs = require('yargs');
const geo = require('./geocode/geocoding');
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            address: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var callbackFunction = (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
     //   console.log(JSON.stringify(results, undefined, 1));
     console.log(`The temperature is ${parseFloat(results.temperature).toFixed(2)}. It feels like ${parseFloat(results.apparentTemperature).toFixed(2)}!`);
    }
};

var callbackFunctionAddress = (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.localWeather(results.latitude, results.longitude, callbackFunction);
    }

};

geo.geoCodeAddress(argv.address, callbackFunctionAddress);




