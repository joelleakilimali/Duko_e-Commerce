const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  user: { type: schema.Types.ObjectId, ref: "User", required: true },
  product: [{ type: schema.Types.ObjectId, ref: "Product", required: true }],
  status: { type: "string", enum: ["UNPAID", "PAID"], default: "UNPAID" },
  createdAt: { type: Date, default: Date.now() },
  paidAt: { type: Date },
  amount: { type: Number, default: 0 },
});
module.export = mongoose.model("Basket", schema);
