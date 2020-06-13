const Order = require("../models");

const createOrder = async (req, res) => {
  const { customerId, totalOrderValue, shippingAddress, paymentMethod, products } = req.body;
  try {
    const newOrder = new Order({
      customerId,
      totalOrderValue,
      shippingAddress,
      paymentMethod,
      products
    });
    const order = await newOrder.save();
    res.status(201).send(order);
  } catch (e) {
    console.error("---Error creating order ----", e);
    res.status(500).send({ message: "Error creating new order" });
  }
};

const fetchAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (e) {
    console.error("---Error fetching orders ----", e);
    res.status(500).send({ message: "Error fetching orders informations" });
  }
};

const fetchOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await Order.findOne({ _id: id });
    res.status(200).send(order);
  } catch (e) {
    console.error("---Error fetching order specific ----", e);
    res
      .status(500)
      .send({ message: "Error fetching specific order informations" });
  }
};
module.exports = { createOrder,fetchAllOrders,fetchOrderById };
