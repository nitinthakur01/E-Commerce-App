const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  cartId: { type: String },
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "processing", "completed", "cancelled"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    enum: ["paypal", "cod", "stripe"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  orderUpdateDate: { type: Date },
  paymentId: String,
  payerId: String,
});

module.exports = mongoose.model("Order", OrderSchema);
