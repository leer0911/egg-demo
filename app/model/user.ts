import { Application } from 'egg';
import { Schema } from 'mongoose';

export default (app: Application) => {
  const mongoose = app.mongoose;

  const userSchema = new mongoose.Schema({
    userName: { type: Schema.Types.String },
    password: { type: Schema.Types.String }
  });
  return mongoose.model('User', userSchema);
};
