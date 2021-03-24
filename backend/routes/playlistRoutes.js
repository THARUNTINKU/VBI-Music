const express = require('express');
const router = express.Router();
const {
    getPlaylist,
    getPlaylistById,
    createPlaylist,
    updatePlaylist,
} = require('../controllers/playlistController');

router.route('/').get(getPlaylist).post(createPlaylist);
router.route('/:id').get(getPlaylistById).put(updatePlaylist);

module.exports = router;
