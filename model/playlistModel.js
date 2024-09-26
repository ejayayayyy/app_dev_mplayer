const db = require("../config/db");

exports.createPlaylist = (playlistData, callback) => {
  const query =
    "INSERT INTO playlist (playlist_name, playlist_img) VALUES (?, ?)";
  db.query(
    query,
    [playlistData.playlist_name, playlistData.playlist_img],
    (err, results) => {
      if (err) throw err;
      callback(results);
    }
  );
};

exports.getAllPlayList = (callback) => {
  const query = "SELECT * FROM playlist";
  db.query(query, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

exports.getSpecificPlaylist = (id, callback) => {
  const query = "SELECT * FROM playlist WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

exports.updatePlaylist = (id, playlistData, callback) => {
  const query =
    "UPDATE playlist SET playlist_name = ?, playlist_img = ? WHERE id = ?";
  db.query(
    query,
    [playlistData.playlist_name, playlistData.playlist_img, id],
    (err, results) => {
      if (err) throw err;
      callback(results);
    }
  );
};

exports.deletePlaylist = (id, callback) => {
  const query = "DELETE FROM playlist WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};
