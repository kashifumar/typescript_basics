export { };
/*
using class and Union Types
 */
class Album {
  artist_name: string;
  album_name: string;
  tracks: number | undefined;
  constructor(artist_name: string, album_name: string, tracks: number | undefined) {
    this.artist_name = artist_name;
    this.album_name = album_name;
    if (tracks !== undefined) {
      this.tracks = tracks;
    }


  }

}
function make_album(artist_name: string, album_name: string, no_of_tracks?: number): Album {
  const album = new Album(artist_name, album_name, no_of_tracks);
  return album;
};

console.log(make_album("Nusrat Fathe Ali Khan", "Wohi Khuda Hai"));
console.log(make_album("Najam Sheraz", "Yeh Moamla Koi Aur Hai"));
console.log(make_album("Junoon", "Azadi", 15));
