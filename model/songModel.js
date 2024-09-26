const db = require('../config/db');

exports.uploadSong = (songData, callback) => {
    const query = "INSERT INTO songs (title, artist, path, genre) VALUES (?,?,?,?)";
    db.query(query, [songData.title, songData.artist, songData.path, songData.genre], (err,results) => {
        if(err) throw err;
        callback(results);
    })
}

exports.getAll = (callback) => {
    const query = "SELECT * FROM songs";
    db.query(query, (err,results) => {
        if (err) throw err;
        callback(results);
    })
}

exports.getSpecific = (id, callback) => {
    const query = "SELECT * FROM songs WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        callback(results);
    })
}

exports.updateSong = (id, songData, callback) => {
    const query = "UPDATE songs SET title = ?, artist = ?, genre = ? WHERE id = ?";
    db.query(query, [songData.title, songData.artist, songData.genre, id], (err, results) => {
        if (err) throw err;
        callback(results);
    })
}

exports.deleteSong = (id, callback) => {
    const query = "DELETE FROM songs WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        callback(results);
    })
}