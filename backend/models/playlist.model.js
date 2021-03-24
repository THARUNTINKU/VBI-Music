const mongoose = require('mongoose');
const Joi = require('joi');
const { songSchema } = require('./song.model');

const playlistSchema = new mongoose.Schema(
    {
        playlistName: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50,
            trim: true,
            unique: true,
        },
        playlistSongs: [
            {
                type: songSchema,
                required: true,
            },
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Playlist = mongoose.model('Playlist', playlistSchema);

function validatePlaylist(datalist) {
    const schema = {
        playlistName: Joi.string().min(5).max(50).required(),
        playlistSongs: Joi.array().required(),
        createdBy: Joi.required(),
    };
    return Joi.validate(datalist, schema);
}

module.exports = { Playlist, validatePlaylist };
