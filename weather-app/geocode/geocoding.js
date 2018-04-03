const request = require('request');


var geoCodeAddress = (address,callback) => {
    address=encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCbv5SGWZyN-G-BOFAMy1rN-6NpTSmAa4o`,
        json: true
    }, (error, response, body) => {
       
        //console.log(JSON.stringify(body,undefined, 1));
        if (error) {
            callback("Unable to connect to Google Servers!");
        }
        else if (body["status"] !== "OK") {
            callback("Unable to find the address!");
        } else {
            var geometryLoc = body.results[0]["geometry"]["location"];
            callback(undefined,{
                address:body.results[0]["formatted_address"],
                latitude:geometryLoc["lat"],
                longitute:geometryLoc["lng"]

            });
        }
    });
}

module.exports = ({
    geoCodeAddress
});