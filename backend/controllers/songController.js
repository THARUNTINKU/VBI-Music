const asyncHandler = require('express-async-handler');
const { Song, validateSong } = require('../models/song.model');

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find().select('-__v');
    res.json(songs);
});

// @desc    Get song by id
// @route   GET /api/songs/:id
// @access  Private/Admin
const getSongById = asyncHandler(async (req, res) => {
    const song = await Song.findById(req.params.id).select('-__v');

    if (song) {
        res.json(song);
    } else {
        res.status(404);
        throw new Error('Song not found');
    }
});

module.exports = { getSongs, getSongById };
