function make_great(magicians) {
    var mag = [];
    if (magicians.length > 0) {
        for (var i in magicians) {
            mag.push("Great " + magicians[i]);
        }
    }
    else {
        console.log("List Is Empty");
    }
    return mag;
}
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
var new_mag = make_great(magicians);
console.log("Original Magicians");
show_magicians(magicians);
console.log("\nNew Magicians");
show_magicians(new_mag);
