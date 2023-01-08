const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doubtSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String},
    userID: {type: Number, required: true},
    topic: {type: String, required: true},
    subtopic: {type: String, required: true},
    date: {type: Date, default: Date.now},
    roomID: {type: Number, required: true},
    doubtID: {type: Number, required: true},
    image: {type: String}
});

doubtSchema.index({roomID: 1, doubtID: 1}, {unique: true});


module.exports = mongoose.model('Doubt', doubtSchema);