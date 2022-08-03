const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  basket: [{ type: Schema.Types.ObjectId, ref: "Basket", required: true }],
  quantity: { type: Number },
});
module.exports = mongoose.model("BasketItem", schema);
