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
  try {
    const order = await this.findById(id);
    return order;
  }
  catch(err) {
    console.log(err);
    throw err;
  }
}

orderSchema.statics.persist = async function(order) {
  const createdOrder = await this.create(order);
  return createdOrder;
}

orderSchema.statics.update = async function(id, order) {

  return false;
}

orderSchema.statics.delete = async function(id) {
  try {
    const deletions = await this.deleteOne({_id: id});
    return deletions.deletedCount > 0;
  }
  catch(err) {
    console.log(err);
    return false;
  }
}

const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;
