const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  status: { type: String, enum: ["UNPAID", "PAID"], default: "UNPAID" },
  createdAt: { type: Date, default: Date.now() },
  paidAt: { type: Date },
  amount: { type: Number, default: 0 },
});
module.exports = mongoose.model("Basket", schema);
