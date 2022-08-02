const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, require: true },
  surname: { type: String, require: false },
  gender: { type: String, required: false, enum: ["MALE", "FEMALE"] },
  address: { type: Object, required: false },
  password: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: false },
  role: {
    type: String,
    required: false,
    enum: ["CLIENT", "SHOP_OWNER", "ADMIN"],
    default: "CLIENT",
  },
  status: {
    type: String,
    required: false,
    enum: ["ACTIF", "NOT_ACTIF"],
    default: "ACTIF",
  },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("User", schema);
