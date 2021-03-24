const express = require('express');
const router = express.Router();
const { getSongs, getSongById } = require('../controllers/songController');

router.route('/').get(getSongs);
router.route('/:id').get(getSongById);

module.exports = router;
