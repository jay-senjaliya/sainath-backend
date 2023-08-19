const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Tour must have a name!'],
        unique: [true, 'All Tour must have different names!'],
        trim: true
    },
    day: {
        type: Number,
        required: [true, 'Please define tour was how many days long!']
    },
    night: {
        type: Number,
        required: [true, 'Please define tour was how many nights long!']
    },
    price: {
        type: Number
    },
    ex: {
        type: String,
        required: [true, 'A tour must have ex. value, from where tour will start.']
    },
    category: {
        type: [String],
        enum: ['domestic tour', 'international tour', 'pilgrimage tour', 'gujarat tour']
    },
    hotelPrice: [
        {
            roomSharing: Number,
            roomPrice: Number
        }
    ],
    ratingsAverage: {
        type: Number,
        default: 4.5,
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have max group size'],
    },
    packageType: {
        type: String,
        enum: ['standard', 'delux', 'super delux'],
        default: 'standard',
        required: [true, 'A tour must have a package type!']
    },
    itinerary: [
        {
            day: Number,
            locations: [String],
            desc: String,
            note: String
        }
    ],
    services: [
        {
            serviceName: String,
            provide: Boolean
        }
    ],
    description: {
        type: String,
        minlength: 20,
        maxlength: 1000,
        trim: true
    },
    images: [String],
    startDates: [Date],
    inclusion: {
        type: [String],
        required: [true, 'A tour must have inclusion']
    },
    exclusion: {
        type: [String],
        required: [true, 'A tour must have exclusion']
    },
    cancellationPolicy: {
        type: [String],
        required: [true, 'A tour must have cancellation policy!']
    },
    importantNotes: {
        type: [String]
    },
    paymentTerm: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
