import mongoose from 'mongoose';

const tacoSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  price: Number,
  name: String,
  details: String,
  type: String,
});

tacoSchema.statics.getTacos = async function() {
  const tacos = await this.find();
  return tacos;
};

tacoSchema.statics.getById = async function(id) {
  const taco = await this.findOne({id: id});
  return taco
};

const TacoModel = mongoose.model('TacoModel', tacoSchema);

export default TacoModel;
