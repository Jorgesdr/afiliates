import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

const username = process.env.MONGODB_USER
const password = process.env.MONGODB_PASS

const uri = `mongodb+srv://${username}:${password}@preciosrebajados.mlaqds9.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function getProduct () {
  try {
    await client.connect()
    const database = client.db('preciosrebajados')
    return database.collection('products')
  } catch (err) {
    console.error('Error connecting to the database')
    console.error(err)
    await client.close()
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}

export class ProductModel {
  static async getAllProducts () {
    const queryAll = await getProduct()
    if (queryAll === undefined) {
      return console.error('No products')
    }

    return queryAll.find({}).toArray()
  }

  static async getProductById ({ id }) {
    const queryId = await getProduct()
    const objectId = new ObjectId(id)
    return queryId.findOne({ _id: objectId })
  }

  static async getProductsByCategory ({ category }) {
    const queryAll = await getProduct()
    if (queryAll === undefined) {
      return console.error('No products')
    }
    return queryAll.find({ category_name: { $regex: category, $options: 'i' } }).toArray()
  }
  // { $gte: category }
}
