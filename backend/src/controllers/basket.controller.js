const mongoose = require("mongoose");

const {
  createBasket,
  getAllBasket,
  getBasketById,
  getBasketByOwnerId,
  updateBasket,
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
  updatedBasket: async (req, res) => {
    const body = req.body;
    const basketId = req.params.id;
    const basket = await getBasketById(basketId);
    if (!basket) {
      return res.status(400).json({ data: "Basket  not dound" });
    }
    const updatedinfo = await updateBasket(basketId, body);
    return res.status(200).json({ data: updatedinfo });
  },
  addProduct: async (req, res) => {
    const body = req.body;
    productID = body.product;
    const basketId = req.params.id;
    const basket = await getBasketById(basketId);
    if (!basket) {
      return res.status(400).json({ data: "Basket  not dound" });
    }

    basket.product.push(productID);
    basket.save();

    return res.status(200).json({ data: basket });
  },
  removeProduct: async (req, res) => {
    const body = req.body;
    const productID = body.product;
    const basketId = req.params.id;
    const basket = await getBasketById(basketId);
    if (!basket) {
      return res.status(400).json({ data: "Basket  not dound" });
    }
    const id = mongoose.Types.ObjectId(productID);

    console.log("---", typeof id);

    const newproduct = basket.product.filter((e) => e.toString() !== productID);

    // basket.product.forEach((p) => console.log(p.toString()));
    basket.product = newproduct;
    console.log(newproduct);
    basket.save();

    return res.status(200).json({ data: basket });
  },
};
