function Track(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

function Playlist(name){
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function (newtrack) {
  this.tracks.push(newtrack);
}

Playlist.prototype.overallRating = function () {
  let overallRating = 0;
  this.tracks.forEach(track => {
    overallRating += track.rating
  });
  return overallRating / (this.tracks.length);
}

Playlist.prototype.totalDuration = function () {
  let totalDuration = 0;
  this.tracks.forEach(track => {
    totalDuration += track.length
  });
  return totalDuration;
}


function Library(name,creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist){
  this.playlists.push(playlist);
}

const t01 = new Track("Code Monkey",5,300);
const t02 = new Track("Model View Controller", 3, 250);
// console.log(t01);
// console.log(t02);

const playlist = new Playlist('myplaylist')

playlist.addTrack(t01);
playlist.addTrack(t02);


console.log(playlist.totalDuration());
console.log(playlist.overallRating());

const library = new Library("myLibrary","Tony");
library.addPlaylist(playlist);
console.log(library.playlists);



