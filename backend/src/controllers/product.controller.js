const {
  createProduct,
  getProductById,
  updateProduct,
  getAllProduct,
} = require("../services/product.service");
const { checkExistenceShopById } = require("../services/shop.service");
const { getUserById } = require("../services/user.service");

module.exports = {
  makeProduct: async (req, res) => {
    const name = req.body.name;
    shopId = req.params.id;
    const checkuser = await checkExistenceShopById(shopId);
    if (!checkuser) {
      console.log(checkuser);
      return res.status(400).json({
        error: "you need to have a shop in order to add a product to sell",
      });
    }
    if (!name || !req.body) {
      return res.status(400).json({ error: " you must fill required field " });
    }
    const product = await createProduct({ ...req.body, shop: shopId });
    return res.status(200).json({ data: product });
  },
  updatedProduct: async (req, res) => {
    const body = req.body;
    const productId = req.params.id;
    const product = await getProductById(productId);
    if (!product) {
      console.log(shop);
      return res.status(400).json({ data: "Product  not dound" });
    }
    const updatedinfo = await updateProduct(productId, body);
    return res.status(200).json({ data: updatedinfo });
  },
  findProductById: async (req, res) => {
    product = await getProductById(req.params.id);
    return res.status(200).json({ product });
  },
  findAllProduct: async (req, res) => {
    products = await getAllProduct();
    return res.status(200).json({ data: products });
  },
  addShoSelling: async (req, res) => {
    const shopId = req.params.id;
    const productId = req.body.productId;
    body = req.body;
    await updateProduct(productId, { ...body, shop: shopId });
    return res
      .status(200)
      .json({ message: "new shop selling this product has been added" });
  },
};
