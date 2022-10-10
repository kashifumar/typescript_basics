"use strict";
exports.__esModule = true;
var users = ["musa", "ali", "admin", "adil", "ahmed"];
// let users = [""];
// users.pop();
if (users.length > 0) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + users[i] + "! Welcome to the system");
        }
    }
}
else {
    console.log("We Need to Find Some Users");
}
