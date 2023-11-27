import { ProductModel } from './models/mongo/products.js'
import { CategoryModel } from './models/mongo/category.js'
import { CreateApp } from './app.js'

CreateApp({ productModel: ProductModel, categoryModel: CategoryModel })
