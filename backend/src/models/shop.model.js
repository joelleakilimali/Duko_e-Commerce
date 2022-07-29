const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  owner: { type: schema.Types.ObjectId, ref: "User", required: true },
  category: {
    type: string,
    required: false,
    enum: ["ELECTRONIC", "CLOTHES", "FOOD", "OTHER"],
  },
  website: { type: string, required: false },
  email: { type: string, required: false },
  createdAt: { type: Date, default: Date.now() },

});
module.exports = mongoose.model("Shop", schema);
