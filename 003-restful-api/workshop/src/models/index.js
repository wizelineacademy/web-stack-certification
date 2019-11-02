import mongoose from 'mongoose';
import TacoModel from './tacoModel';
import OrderModel from './orderModel';

const connectDb = () => {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { TacoModel, OrderModel };

export { connectDb };
export default models;
