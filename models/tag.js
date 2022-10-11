const mongoose = require('mongoose');
const Schema = mongoose.Schema;

tagSchema = new Schema({
    name: String,
})

module.exports = mongoose.model('Tag', tagSchema);