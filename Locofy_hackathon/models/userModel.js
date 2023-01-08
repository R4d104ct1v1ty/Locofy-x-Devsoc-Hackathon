const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userID: {type: Number, required: true, unique: true},
    starredDoubts: [{roomID:{type: Number, required: true}, doubtID: {type:Number, required: true}}]
});

// userSchema.methods.matchPassword = async function(enterredPassword){
//     return await bcrypt.compare(enterredPassword, this.password);
// }

// userSchema.pre('save', async function (next){
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// })

module.exports = mongoose.model('User', userSchema);