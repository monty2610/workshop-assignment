const {
  fetchProducts,
  createProduct,
  fetchProductById,
} = require("../products");

const productResolver = {
  Query: {
    products: () => {
      const products = fetchProducts();
      return products;
    },
    product: (parent, args) => {
      const product = fetchProductById(args.id);
      return product;
    },
  },
  Mutation: {
    createProduct: async (parent, args) => {
      const product = await createProduct(args.product);
      return product;
    },
  },
};

module.exports = productResolver;
