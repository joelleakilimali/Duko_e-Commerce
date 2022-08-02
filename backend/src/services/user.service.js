// I'm creating a variable that will hold information jus as our model , so that we can create/modify/filter/...
const User = require("../models/user.model");

module.exports = {
  createUser: async (param) => {
    return User.create(param);
  },
  getAllUser: async () => {
    return await User.find();
  },
  getUserByEmail: async (useremail) => {
    return await User.findOne({ email: useremail });
  },
  getUserById: async (userId) => {
    return await User.findById(userId);
  },

  updateUsers: async (id, body) => {
    const filter = { _id: id };
    const update = body;
    return await User.findOneAndUpdate(filter, update);
  },
};
