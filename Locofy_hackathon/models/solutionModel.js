const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solutionSchema = new Schema({
    body: {type: String, required: true},
    userID: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    roomID: {type: Number, required: true},
    doubtID: {type: Number, required: true},
    image: {type: String}
});


module.exports = mongoose.model('Solution', solutionSchema);