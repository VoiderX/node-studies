
const yargs = require('yargs');
const geo = require('./geocode/geocoding');
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
geo.geoCodeAddress(argv.address);
