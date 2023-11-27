import express from 'express'
import { createProductRouter } from './routes/products.js'
import { createCategoryRouter } from './routes/category.js'

export const CreateApp = ({ productModel, categoryModel }) => {
  const app = express()

  app.disable('x-powered-by')

  app.use(express.json())

  app.use('/products', createProductRouter({ productModel }))
  app.use('/categories', createCategoryRouter({ categoryModel }))
  app.use('/images', express.static('src/images'))

  app.use((req, res) => {
    res.status(404).send('<h1>Not found</h1>')
  })

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
  })
}
