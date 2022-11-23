const { orderModel, orderDetailsModel } = require("../models/orderModel");

const createOrder = async (req, res) => {
  const { order_id, totalItems, order_status, totalPrice, order_details } =
    req.body;
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getAllOrders = async (req, res) => {
  try {
    orderModel.find().then((result) => res.json({ posts: result }));
  } catch (err) {
    res.status(400).json(error.message);
  }
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  orderModel
    .findById(id)
    .then((result) => {
      const id = result.order_details._id;
      orderDetailsModel.findByIdAndDelete(id);
    })
    .then(() => {
      orderModel
        .findByIdAndDelete(id)
        .then((result) => res.json({ status: "Successfully Deleted" }))
        .catch((err) => res.status(400).json(err));
    });
};

module.exports = {
  createOrder,
  getAllOrders,
  deleteOrder,
};
