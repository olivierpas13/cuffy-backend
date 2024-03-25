import { PAGE_SIZE } from "../../utils/productUtils.js";
import Product from "../models/product.js";

class productRepository {

  pageSize = PAGE_SIZE;

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

  async fetchProductsByPage(index){
    try {
      const page = await Product.find().skip(this.pageSize * index).limit(this.pageSize);
      return page;
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

  async countProducts(){
    try {
      const count = await Product.countDocuments();
      return count;
    } catch (error) {
      throw error;
    }
  }

}

export default productRepository;
