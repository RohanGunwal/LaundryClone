const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  quantity: { type: String, required: true },
  washType: [{ type: String, required: true }],
  price: { type: String, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    order_id: { type: String, required: true, unique: true },
    order_date: { type: Date, default: Date.now() },
    totalItems: { type: String, required: true },
    order_status: { type: String, required: true },
    totalPrice: { type: String, required: true },
    order_details: { type: [orderDetailsSchema], required: true },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);

const orderDetailsModel = mongoose.model("orderDetails", orderDetailsSchema);

module.exports = { orderModel, orderDetailsModel };
