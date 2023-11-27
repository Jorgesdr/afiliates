import { readJSON } from '../../utils/util.js'
const products = readJSON('./../mocks/product.json')

export class ProductModel {
  static async getAllProducts () {
    return products
  }

  static async getById ({ id }) {
    return products.find(product => product.aw_product_id === parseInt(id))
  }

  static async getByCategory ({ category }) {
    return products.filter(product => product.category_name === category)
  }
}
