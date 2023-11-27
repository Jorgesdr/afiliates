export class CategoryController {
  constructor ({ categoryModel }) {
    this.categoryModel = categoryModel
  }

  getAllCategory = async (req, res) => {
    const category = await this.categoryModel.getAllCategory({})
    res.header('Access-Control-Allow-Origin', '*')
    res.json(category)
  }

  getCategoryById = async (req, res) => {
    const { id } = req.params
    const categoyId = await this.categoryModel.getCategoryById({ id })
    if (categoyId) {
      res.header('Access-Control-Allow-Origin', '*')
      res.json(categoyId)
    } else {
      res.status(404).send('Not found')
    }
  }
}
