const {
  createProduct,
  getProductById,
  updateProduct,
  getAllProduct,
  getshopSellingProduct,
  getshopSellingProductByName,
} = require("../services/product.service");
const { checkExistenceShopById } = require("../services/shop.service");

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

  findShopSellingProduct: async (req, res) => {
    const producId = req.params.id;
    check = await getProductById(producId);
    if (!check) {
      return res.status(400).json({ data: "product not dound" });
    }
    const listShop = await getshopSellingProduct(producId);
    return res.status(200).json({ data: listShop });
  },
  findShopSellingProductByName: async (req, res) => {
    const producName = req.body.name;

    const listShop = await getshopSellingProductByName(producName);
    if (!listShop) {
      return res.status(400).json({ data: "product not dound" });
    }
    return res.status(200).json({ data: listShop });
  },
  changeStatusProduct: async (req, res) => {
    productId = req.params.id;
    check = await getProductById(productId);
    if (!check) {
      return res.status(400).json({ data: "product not dound" });
    }
    const newStatus = await updateProduct(productId, {
      status: "OUT_OF_STOCK",
    });
    return res.status(200).json({ data: newStatus });
  },
};
