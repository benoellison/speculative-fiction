const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  })

publicationSchema = new Schema({
    title: String,
    medium: {
        type: String,
        enum: ['Book', 'Movie', 'TV series', 'Comic series', 'Other']
    },
    creator: String,
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
    reviews: [reviewSchema],
},
{timestamps: true}
)

module.exports = mongoose.model('Publication', publicationSchema);