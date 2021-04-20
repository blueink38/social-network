const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Please let us know what you think!',
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: 'What is your name?'
  },
  reactions: [reactionSchema]
}, 
{toJSON:{
  getters: true
},
id: false
})

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;