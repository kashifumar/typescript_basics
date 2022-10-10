export { };
/*
using objects and optional properties and optional arguments
*/

function make_album(artist_name: string, album_name: string, no_of_tracks?: number) {
  let album: {
    artist_name: string;
    album_name: string;
    tracks?: number | undefined;
  };

  album = {
    artist_name: artist_name,
    album_name: album_name,
  };
  if (no_of_tracks !== undefined) {
    album.tracks = no_of_tracks;
  }
  return album;
};

console.log(make_album("Nusrat Fathe Ali Khan", "Wohi Khuda Hai"));
console.log(make_album("Najam Sheraz", "Yeh Moamla Koi Aur Hai"));
console.log(make_album("Junoon", "Azadi", 15));
