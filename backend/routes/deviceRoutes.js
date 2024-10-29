const express = require('express');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

// POST route to connect device
router.post('/connect-device', deviceController.connectDevice);
router.post('/disconnect-device', deviceController.disconnectDevice);

module.exports = router;