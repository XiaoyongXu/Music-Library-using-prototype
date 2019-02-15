var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    for (var plays in this.playlists) {
      console.log(this.playlists[plays].id, ": " + this.playlists[plays].name + " - " + this.playlists[plays].tracks.length + " tracks")
    }
  },
  printTracks: function () {
    for (var track in this.tracks) {
      console.log(this.tracks[track].id, ": " + this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
    }
  },
  printPlaylist: function (playlistId) {
    var playList = this.playlists[playlistId];
    console.log(playList.id, ": " + playList.name + " - " + playList.tracks.length + " tracks")
    var t = playList.tracks;

    for (var i = 0; i < t.length; i++) {
      console.log(this.tracks[t[i]].id, ": " + this.tracks[t[i]].name + " by " + this.tracks[t[i]].artist + " (" + this.tracks[t[i]].album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(this.playlists[playlistId].tracks);
  },
  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    let x = library.uid();
    this.tracks[x] = {
      id: x,
      name: name,
      artist: artist,
      album: album
    }
    // console.log(this.tracks[x]);
  },
  addPlaylist: function (name) {
    let x = library.uid();
    this.playlists[x] = {
      id: x,
      name: name,
    }
    // console.log(library.playlists[x]);
  }

}