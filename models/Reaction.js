const mongoose = require('mongoose');
const { types } = require('node:util');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
},
{
  toJSON:{getters:true}, 
  id: false
})

module.exports = reactionSchema;