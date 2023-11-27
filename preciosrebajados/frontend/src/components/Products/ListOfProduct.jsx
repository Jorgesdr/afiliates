import { Filters } from '../Filters/Filters'
import { Product } from './Product'
import { useProduct } from '../../hooks/useProduct'
import { useSearch } from '../../hooks/useSearch'
import { useFilter } from '../../hooks/useFilter'
import { useEffect } from 'react'
import { NoResultsFound } from '../NoResultsFound/NoResultsFound'

export const ListOfProduct = () => {
  const { search } = useSearch()
  const { filterProducts } = useFilter()

  const { products, getsProducts } = useProduct({ search: ' ' })
  const filteredProducts = filterProducts(products)

  const hasProducts = products?.length > 0

  useEffect(() => {
    getsProducts({ search })
  }, [search])

  return hasProducts
    ? (
      <>
      <h2>Ofertas Populares</h2>
        <Filters />
        <div className='container-listofproducts'>
          <section className='listofproducts'>
            <ul className='listofproducts-products'>
              {filteredProducts.length === 0
                ? <NoResultsFound />
                : filteredProducts.map((product) => (
                  <li key={product.id} className='container-product'>
                    <Product
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                      brand={product.brand}
                    />
                  </li>
                ))}

            </ul>

          </section>
        </div>
      </>

      )
    : <NoResultsFound />
}
