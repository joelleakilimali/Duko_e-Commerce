const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  name: { type: String, required: true },
  shop: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
  category: {
    type: String,
    required: false,
    enum: ["ELECTRONIC", "CLOTHES", "FOOD", "OTHER"],
    dfault: "CLOTHES",
  },
  price: { type: Number, required: false },
  status: {
    type: String,
    required: false,
    enum: ["AVAILABLE", "OUT_OF_STOCK"],
    default: "AVAILABLE",
  },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Product", schema);
