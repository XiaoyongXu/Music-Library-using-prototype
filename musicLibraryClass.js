class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

class Playlist{
  constructor(name){
    this.name = name;
    this.tracks = [];
  }
  addTrack(newtrack) {
    this.tracks.push(newtrack);
  }
  overallRating() {
    let overallRating = 0;
    this.tracks.forEach(track => {
      overallRating += track.rating
    });
    return overallRating / (this.tracks.length);
  }
  totalDuration () {
    let totalDuration = 0;
    this.tracks.forEach(track => {
      totalDuration += track.length
    });
    return totalDuration;
  }
}

class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

const t01 = new Track("Code Monkey", 5, 300);
const t02 = new Track("Model View Controller", 3, 250);

const playlist = new Playlist('myplaylist')

playlist.addTrack(t01);
playlist.addTrack(t02);

console.log(playlist.totalDuration());
console.log(playlist.overallRating());

const library = new Library("myLibrary", "Tony");
library.addPlaylist(playlist);
console.log(library.playlists);

