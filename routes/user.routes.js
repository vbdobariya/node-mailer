require("../model/user.model");
const express = require('express');
const router = express.Router();
const controllers = require('../controller/user.controller');

router.post('/create', controllers.create);
router.get('/get',controllers.get);
router.put('/:id',controllers.update);
router.delete('/delete/:id',controllers.delete);

 module.exports = router;