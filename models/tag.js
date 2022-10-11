const mongoose = require('mongoose');
const Schema = mongoose.Schema;

tagSchema = new Schema({
    name: String,
    publications: [{type: Schema.Types.ObjectId, ref: 'Publication'}],
},
{timestamps: true}
)

module.exports = mongoose.model('Tag', tagSchema);