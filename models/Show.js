const { Schema, model } = require('mongoose');
 
const showSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Show Name is required.'],
    },
    creator: {
      type: String,
      required: [true, 'Creator is required.'],
    },
    launched: {
      type: Number,
      required: [true, 'Year is required.']
    },
    image: {
      type: String,
      default:'https://i.imgur.com/ExgDzpE.png',
    }, 
    description: {
      type: String,
      required: [true, 'Description is required.'],
    },
  },
  {
    timestamps: true
  }
);
 
const Show = model('Show', showSchema);
module.exports = Show;