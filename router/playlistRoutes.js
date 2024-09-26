const express = require('express');
const router = express.Router();
const playlistController = require('../controller/playlistController');
const upload_playlist = require('../app')

// submit create playlist
router.post('/playlist/create', upload_playlist.single('playlist_img') ,playlistController.addPlaylist);

// get all playlist
router.get('/playlist/all', playlistController.getAllPlaylist)
