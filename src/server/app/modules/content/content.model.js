import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  parmalink: {
    type: String
  }
});

// contentSchema.plugin(uniqueValidator);
contentSchema.plugin(timestamp);

const contentModel = mongoose.model('contentModel', contentSchema);
const contentCrud = new Crud(contentModel);

export {
  contentCrud,
  contentModel
};
