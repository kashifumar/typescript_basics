"use strict";
exports.__esModule = true;
/*
using class and optional properties and optional arguments
*/
var Album = /** @class */ (function () {
    function Album(artist_name, album_name, tracks) {
        this.artist_name = artist_name;
        this.album_name = album_name;
        if (tracks !== undefined) {
            this.tracks = tracks;
        }
    }
    return Album;
}());
function make_album(artist_name, album_name, no_of_tracks) {
    var album = new Album(artist_name, album_name, no_of_tracks);
    return album;
}
;
console.log(make_album("Nusrat Fathe Ali Khan", "Wohi Khuda Hai"));
console.log(make_album("Najam Sheraz", "Yeh Moamla Koi Aur Hai"));
console.log(make_album("Junoon", "Azadi", 15));
