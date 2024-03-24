import Product from "../models/product.js";

class productRepository {
  async fetchProductById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async createProduct(data) {
    try {

      const product = new Product(data);

      const savedProduct = await product.save();

      return savedProduct;
    } catch (error) {
      return error;
    }
  }

  async fetchProducts(){
    try {
      const products = await Product.find();
      return products
    } catch (error) {
      throw error;
    }
  }

  async fetchProductById(id){
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      throw error;
    }
  }
  
  async fetchProductsByProperty(property){
    try {
      const product = await Product.find({properties: property});
      return product;
    } catch (error) {
      throw error;
    }
  }

}

export default productRepository;
