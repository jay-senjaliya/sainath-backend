const express = require('express');
const tourController = require('./../controller/tourController');

const router = express.Router();

router
    .get('/', tourController.getAllTour)
    .post('/', tourController.createTour)
    .patch('/:id', tourController.updateTour)
    .delete('/:id', tourController.deleteTour);

module.exports = router;