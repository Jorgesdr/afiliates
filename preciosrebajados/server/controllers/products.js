export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getAllProducts = async (req, res) => {
    const products = await this.productModel.getAllProducts({})
    res.header('Access-Control-Allow-Origin', '*')
    res.json(products)
  }

  getProductById = async (req, res) => {
    const { id } = req.params
    const product = await this.productModel.getProductById({ id })
    if (product) {
      res.header('Access-Control-Allow-Origin', '*')
      res.json(product)
    } else {
      res.status(404).send('Not found')
    }
  }

  getProductsByCategory = async (req, res) => {
    const { category } = req.params
    const products = await this.productModel.getProductsByCategory({ category })
    if (products) {
      res.header('Access-Control-Allow-Origin', '*')
      res.json(products)
    } else {
      res.status(404).send('Not found')
    }
  }
}
