import { ProductCard } from './ProductCard'

export function ListOfProductCard ({ products }) {
  return (
    <div className='container-listofproducts-card'>
      <section className='listofproducts-card'>
        <ul className='listofproducts-products-card'>
          {
              products.map((product) => (
                <li key={product.id} className='container-product-card'>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    image={product.thumbnail}
                    price={product.price}
                    description={product.description}
                    brand={product.brand}
                    images={product.images}
                    url={product.url}
                  />
                </li>
              ))
            }

        </ul>

      </section>
    </div>
  )
}
