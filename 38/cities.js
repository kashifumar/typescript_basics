"use strict";
exports.__esModule = true;
describe_city("Lahore");
describe_city("Karachi");
describe_city("Delhi");
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("-------------------------------");
    console.log(city + " is in " + country);
}
