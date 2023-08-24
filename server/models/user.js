// const mongoose = require('mongoose')
// //replace the above require with import
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    regno: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    college: {
        type: String,
        enum: [
            'Manipal Institute of Technology',
            'Manipal University Jaipur',
            'Manipal University Sikkim',
            'Manipal University Dubai',
            'Sikkim Manipal Institute of Technology',
            'Manipal College of Dental Sciences',
            'Manipal College of Pharmaceutical Sciences',
            'Manipal College of Health Professions',
            'Manipal College of Nursing',
            'Manipal School of Architecture and Planning',
            'Manipal Institute of Virology',
            'Manipal Institute of Regenerative Medicine',
            'Kasturba Medical College',
            'Welcomgroup Graduate School of Hotel Administration',
            'Manipal School of Information Sciences',
            'Manipal Centre for Natural Sciences',
            'Manipal Institute of Communication',
        ],
        require: true
    },
    photo: {
        url: String
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
})

// mongoose.model('User', userSchema)
// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('User', userSchema)