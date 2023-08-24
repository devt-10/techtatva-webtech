// const mongoose = require('mongoose')
//replace the above require with import
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    organiser: {
        type: String,
        require: true,
        // unique: true
    },
    date: {
        type: Date,
        require: true
    },
    time: {
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
    },
    photos: [{
        url: String
    }],
    prizemoney: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: [
            'Psychus',
            'Tech',
            'Literary',
            'Cultural',
            'Sports',
            'Art',
            'Talks'
        ],
        require: true
    }

})

// mongoose.model('Event', eventSchema)
// module.exports = mongoose.model('Event', eventSchema)
export default mongoose.model('Event', eventSchema)


