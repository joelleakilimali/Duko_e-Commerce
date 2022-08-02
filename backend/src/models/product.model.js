const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  name: { type: String, required: true },
  shop: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
  category: {
    type: String,
    required: false,
    enum: ["ELECTRONIC", "CLOTHES", "FOOD", "OTHER"],
  },
  price: { type: Number, required: false },
  status: {
    type: string,
    required: false,
    enum: ["available", "out of stock"],
  },
  createdAt: { type: Date, default: Date.now() },
});
modules.exports = mongoose.model("Product", schema);
