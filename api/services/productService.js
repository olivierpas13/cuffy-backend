import productRepository from "../database/repositories/productRepository.js";
import { PAGE_SIZE } from "../utils/productUtils.js";

class productService {
  
  limit = PAGE_SIZE;

  constructor() {
    this.repository = new productRepository();
    this.totalProds = null;
  }

  async createProduct(data) {
    try {
      const savedProduct = await this.repository.createProduct(data);

      return savedProduct;
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const products = await this.repository.fetchProducts();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductsPage(index) {
    try {
      const page = await this.repository.fetchProductsByPage(index);
      
      if(!this.totalProds){
        this.totalProds = await this.getProductsCount();
      }

      const res = {
        page,
        currentPage: index,
        nextPage: index + PAGE_SIZE <  this.totalProds ? index + PAGE_SIZE : null,
      }

      return res;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const product = await this.repository.fetchProductById(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async getProductsByProperty(property) {
    try {
      const products = await this.repository.fetchProductsByProperty(property);
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductsCount(){
    try {
      const count = await this.repository.countProducts();
      return count;
    } catch (error) {
      throw error;
    }
  }
}

export default productService;
