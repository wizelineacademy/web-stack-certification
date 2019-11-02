import mongoose from 'mongoose';

const orderDetailSchema = new mongoose.Schema({
  tacoId: String,
  amount: {
    type: Number,
    min: 1, 
    max: 100,
  },
});

const orderSchema = new mongoose.Schema({
  tacos: [orderDetailSchema],
  price: Number,
  user: String,
  notes: String,
});

orderSchema.statics.all = async function() {
  const orders = await this.find();
  return orders;
}

orderSchema.statics.byId = async function(id) {
  const order = await this.findById();
  return order;
}

orderSchema.statics.save = async function(order) {
  const createdOrder = await this.create(order);
  return createdOrder;
}

orderSchema.statics.update = async function(id, order) {

  return false;
}

orderSchema.statics.delete = async function(id) {
  return false;
}

const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;
