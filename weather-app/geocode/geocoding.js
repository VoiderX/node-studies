const request = require('request');


var geoCodeAddress = (address) => {
    address=encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCbv5SGWZyN-G-BOFAMy1rN-6NpTSmAa4o`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(body,undefined, 1));
        if (error) {
            console.log("Unable to connect to Google Servers!");
        }
        else if (body["status"] !== "OK") {
            console.log("Unable to find the address!");
        } else {
            console.log(`Address: ${body.results[0]["formatted_address"]}`);
            var geometryLoc = body.results[0]["geometry"]["location"];
            console.log(`Latitude: ${geometryLoc["lat"]}`);
            console.log(`Longitude: ${geometryLoc["lng"]}`);
        }
    });
}

module.exports = ({
    geoCodeAddress
});