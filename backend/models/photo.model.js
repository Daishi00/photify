const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;