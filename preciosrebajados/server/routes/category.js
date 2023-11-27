import { Router } from 'express'
import { CategoryController } from '../controllers/category.js'

export const createCategoryRouter = ({ categoryModel }) => {
  const categoryRouter = Router()
  const categoryController = new CategoryController({ categoryModel })

  categoryRouter.get('/', categoryController.getAllCategory)
  categoryRouter.get('/:id', categoryController.getCategoryById)

  return categoryRouter
}
