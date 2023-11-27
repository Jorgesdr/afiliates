import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'

// const username = process.env.MONGODB_USER
// const password = process.env.MONGODB_PASS
const username = 'jorge1439'
const password = 'iNi5ExRdyGI0PyjE'

const uri = `mongodb+srv://${username}:${password}@preciosrebajados.mlaqds9.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function getCategory () {
  try {
    await client.connect()
    const database = client.db('preciosrebajados')
    return database.collection('categories')
  } catch (err) {
    console.error(err)
    await client.close()
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}

export class CategoryModel {
  static async getAllCategory () {
    const queryAll = await getCategory()
    if (queryAll === undefined) {
      return console.error('No category found')
    }
    return queryAll.find({ }).toArray()
  }

  static async getCategoryById ({ id }) {
    const queryCategoryId = await getCategory()
    const categoryId = new ObjectId(id)
    return queryCategoryId.findOne({ _id: categoryId })
  }
}
