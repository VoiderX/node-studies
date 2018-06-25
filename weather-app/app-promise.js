const yargs = require('yargs');
const axios = require('axios');

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
var encodedAddress=argv.address;
var geoCodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
    +`&key=AIzaSyCbv5SGWZyN-G-BOFAMy1rN-6NpTSmAa4o`;
axios.get(geoCodeURL).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('Unable to find this address.');
    }    
    var latitude=response.data.results[0].geometry.location.lat;
    var longitude=response.data.results[0].geometry.location.lng;
    console.log(response.data.results[0].formatted_address);
    var weatherURL=`https://api.darksky.net/forecast/`
    +`ebcd2b73bad7d83cf04cb93978aeea99/${latitude},${longitude}?units=si`;
    return axios.get(weatherURL);
}).then((response)=>{
    var temperature=response.data.currently.temperature;
    var apparentTemperature=response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feells like ${apparentTemperature}.`);
}).catch((error)=>{
    if(error.code==='ENOTFOUND'){
        console.log("Unable to connect to API servers.");
    }else{
        console.log(error.message);
    }
} );   