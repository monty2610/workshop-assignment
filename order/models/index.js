const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customerId: String,
  totalOrderValue: Number,
  shippingAddress: String,
  paymentMethod: String,
  products: [String]
});

OrderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

OrderSchema.set("toJSON", {
  virtuals: true,
});

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
