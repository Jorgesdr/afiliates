const config = {
  user: 'preciosrebajados10141699_',
  host: 'PPSQL100.dns-servicio.com',
  port: 5432,
  database: '10141699_preciosrebajados',
  pasword: 'Fqko$3892'
}

async function connect () {
  const { Client } = require('pg')
  const client = new Client(config)

  try {
    await client.connect()
    console.log('Connected correctly to server')
  } catch (err) {
    console.log(err.stack)
    await client.end()
  }
}

export class ProductModel {
  static async getAllProducts () {
    const queryAll = await connect.query('SELECT * FROM products')
    return queryAll
  }

  static async getById ({ id }) {
    const queryId = await connect.query('SELECT * FROM products WHERE id = $1', [id])
    return queryId
  }

  static async getByCategory ({ category }) {
    const queryCategory = await connect.query('SELECT * FROM products WHERE category = $1', [category])
    return queryCategory
  }
}
