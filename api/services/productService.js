import productRepository from "../database/repositories/productRepository.js";

class productService {
  constructor() {
    this.repository = new productRepository();
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
      return page;
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
}

export default productService;
