const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller.js')

router.get('/myparks', async (req, res) => {
    res.status(200).json({park: res.locals.park})
});

module.exports = router;