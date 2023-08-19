const Tour = require('./../models/TourModel');

exports.getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find();

        res.status(200).json({
            message: 'success',
            totalResults: tours.length,
            tours
        });
    } catch (error) {
        res.status(404).json({
            message: 'fail',
            error: error.message
        })
    }
}

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            message: 'success',
            newTour
        });
    } catch (error) {
        res.status(404).json({
            message: 'fail',
            error: error.message
        })
    }

}

exports.updateTour = async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedTour) {
            return res.status(404).json({
                message: 'fail',
                error: 'No Tour found with this id!'
            });
        }

        res.status(200).json({
            message: 'success',
            updatedTour
        });
    } catch (error) {
        res.status(404).json({
            message: 'fail',
            error: error.message
        });
    }

}

exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);

        if (!tour) {
            return res.status(404).json({
                message: 'fail',
                error: 'No Tour found with this id!'
            });
        }

        res.status(204).json({
            message: 'success',
            tour
        });
    } catch (error) {
        res.status(404).json({
            message: 'fail',
            error: error.message
        })
    }
}