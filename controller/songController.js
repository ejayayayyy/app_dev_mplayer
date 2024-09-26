const Song = require("../model/songModel");
const path = require("path");

// main page
exports.index = (req, res) => {
  Song.getAll((songs) => {
    res.render("index", { songs: songs });
  });
};

// upload song
exports.addSong = (req, res) => {
  res.render("addSong");
};

exports.uploadSong = (req, res) => {
  const songData = {
    title: req.body.title,
    artist: req.body.artist,
    path: req.file ? "/uploads/audio/" + req.file.filename : null,
    genre: req.body.genre,
  };

  Song.uploadSong(songData, (results) => {
    res.redirect("/");
  });
};

// play song
// exports.playMusic = (req, res) => {
//   const id = req.params.id;

//   Song.getSpecific(id, (songs) => {
//     if (songs.length > 0) {
//       const song = songs[0];

//       res.render("playMusic", { song: song });
//     } else {
//       res.status(404).send("Song not found");
//     }
//   });
// };

// edit song
exports.editSong = (req, res) => {
  const id = req.params.id;

  Song.getSpecific(id, (songs) => {
    if (songs.length > 0) {
      const song = songs[0];

      res.render("editSong", { song: song });
    } else {
      res.status(404).send("Song not found");
    }
  });
};

// update song
exports.updateSong = (req,res) => {
  const id = req.params.id;

  const songData = {
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
  };

  Song.updateSong(id, songData, (results) => {
    res.redirect('/')
  })
}

//delete song
exports.deleteSong = (req,res) => {
  const id = req.params.id;
  
  Song.deleteSong(id, (results) => {
    if(results.affectedRows > 0) {
      res.status(200).send({message: "Song deleted successfully"});
    }else {
      res.status(404).send({message: "Song not found"});
    }
  });
};
