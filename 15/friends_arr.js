"use strict";
exports.__esModule = true;
/*
 * Name : Kashif Umar
 */
var friends = ["Ali", "Aneeq", "Fawad"];
for (var i = 0; i < friends.length; i++) {
    console.log("Hello " +
        friends[i] +
        " I would like to invite you to join me on dinner");
}
console.log("Seems Anneq is not available");
friends[1] = "Adnan";
console.log("New List");
for (var i = 0; i < friends.length; i++) {
    console.log("Hello " +
        friends[i] +
        " I would like to invite you to join me on dinner");
}
