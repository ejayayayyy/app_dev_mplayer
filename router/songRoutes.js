const express = require('express');
const router = express.Router();
const songController = require('../controller/songController');
// const multer = require('multer');
const upload = require('../app');

router.get('/', songController.index);
// add song
router.get('/add_song', songController.addSong);
router.post('/add_song', upload.single('path'), songController.uploadSong);

// edit song
router.get('/edit_song/:id', songController.editSong);
router.post('/edit_song/:id', songController.updateSong);
// delete song
router.delete('/delete_song/:id', songController.deleteSong)

module.exports = router;