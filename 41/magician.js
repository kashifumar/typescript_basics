"use strict";
exports.__esModule = true;
function show_magicians(magicians) {
    if (magicians.length > 0) {
        for (var i in magicians) {
            console.log(magicians[i]);
        }
    }
    else {
        console.log("List Is Empty");
    }
}
var magicians = [
    "David Blaine",
    "Penn and Teller",
    "Jerry Sadowitz",
    "Dynamo",
    "Apollo Robbins",
    "Derren Brown",
    "The Great Lafayette",
    "Criss Angel",
    "Harry Houdini",
    "Ricky Jay",
];
show_magicians(magicians);
