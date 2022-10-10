"use strict";
exports.__esModule = true;
make_shirt("Small", "I Love Python");
make_shirt("Medium");
make_shirt();
function make_shirt(size, text) {
    if (text === void 0) { text = "I Love JavaScript"; }
    if (size === undefined) {
        size = "large";
    }
    console.log("-------------------------------");
    console.log("The size of the shirt is: " +
        size +
        "\nAnd the text to be printed is: " +
        text);
}
