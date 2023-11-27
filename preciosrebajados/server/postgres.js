import { ProductModel } from './models/postgresql/products.js'
import { CreateApp } from './app.js'

CreateApp({ productModel: ProductModel })
