const bcrypt = require("bcryptjs");
const { createBasket } = require("../services/basket.service");

const {
  createUser,
  getAllUser,
  getUserByEmail,
  updateUsers,
  getUserById,
} = require("../services/user.service");

module.exports = {
  makeUser: async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email) {
      return res.status(404).json({ message: "Missing informations" });
    }
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email.match(emailFormat)) {
      return res.status(400).send({ error: "Invalid email" });
    }
    user = await getUserByEmail(email);
    if (user) {
      return res
        .status(400)
        .json({ message: "user with same email address exist" });
    }
    const hashed_password = bcrypt.hashSync(password, 10);
    newUser = await createUser({ ...req.body, password: hashed_password });
    return res.status(201).json({ data: newUser });
  },

  findAllUser: async (req, res) => {
    const alluser = await getAllUser();
    return res.status(200).json({ data: alluser });
  },
  findUserById: async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: " user doesnt exist" });
    }
    return res.status(200).json({ data: user });
  },
  updatedUser: async (req, res) => {
    const userId = await getUserById(req.params.id);
    if (!userId) {
      return res.status(404).json({ message: "you must select a user" });
    }

    const updatedinfo = await updateUsers(userId, req.body);
    if (req.body.password) {
      const hashed_password = bcrypt.hashSync(req.body.password, 10);
      newUser = await updateUsers(userId, {
        ...req.body,
        password: hashed_password,
      });
    }
    return res.status(200).json({ data: updatedinfo });
  },
  closeUser: async (req, res) => {
    const userId = await getUserById(req.params.id);
    if (!userId) {
      return res
        .status(404)
        .json({ message: "you must select the user account to close" });
    }
    await updateUsers(userId, { status: "NOT_ACTIF" });
    return res.status(200).json({ message: "Account closed" });
  },
};
