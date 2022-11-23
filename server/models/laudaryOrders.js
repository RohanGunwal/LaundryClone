const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    order_id: { type: String, required: true },
    orderDate: { type: Date, default: Date.now() },
    totalItems: { type: Number, required: true },
    status: { type: String, required: true },
    price: { Type: Number, required: true },
    order_details: Array,

    user: { type: Schema.Types.ObjectId, ref: "User" }
})

const Orders = mongoose.model("Orders",orderSchema)

module.exports = Orders

