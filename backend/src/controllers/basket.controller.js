const {
  createBasket,
  getAllBasket,
  getBasketById,
  getBasketByOwnerId,
} = require("../services/basket.service");
const { getUserById } = require("../services/user.service");
const { updatedUser } = require("./user.controller");

module.exports = {
  makeBasket: async (req, res) => {
    idUser = req.params.id;
    const check = await getUserById(idUser);
    if (!check) {
      return res.status(404).json({ message: "this owner does not exist " });
    }
    const basket = await createBasket(idUser);
    return res.status(200).json({ data: basket });
  },
  findAllBasket: async (req, res) => {
    const BasketList = await getAllBasket();
    return res.status(200).json({ data: BasketList });
  },
  findBasketById: async (req, res) => {
    const BasketId = req.params.id;
    const basket = await getBasketById(BasketId);
    if (!basket) {
      return res.status(400).json({ data: "basket not dound" });
    }

    return res.status(200).json({ data: basket });
  },
  findBasketByOwnerId: async (req, res) => {
    const ownerId = req.params.id;
    const check = await getUserById(ownerId);
    if (!check) {
      return res.status(404).json({ message: "this owner does not exist " });
    }
    const basketList = await getBasketByOwnerId(ownerId);
    if (!basketList) {
      return res
        .status(404)
        .json({ data: "this owner doesnt have an active basket" });
    }
    return res.status(200).json({ data: basketList });
  },
};
