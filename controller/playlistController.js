const Playlist = require('../model/playlistModel');
// const multer = require('multer');
// const path = require('path')



exports.addPlaylist = (req,res) => {
    const playlistData = {
        playlist_name: req.body.playlist_name,
        playlist_img: req.file ? '/uploads/' + req.file.filename : null
    };

    Playlist.addPlaylist(playlistData, (results) => {
        res.redirect('/');
    });
};

exports.getAllPlaylist = (req, res) => {
    Playlist.getAllPlaylist((playlist) => {
        res.render('index', {playlist});
    });
};

