import { useEffect } from 'react'

import { useProduct } from '../../hooks/useProduct'
import { useSearch } from '../../hooks/useSearch'
import { useFilter } from '../../hooks/useFilter'

import { ProductCardAwin } from './ProductCardAwin'

import { Filters } from '../Filters/Filters'
import { NoResultsFound } from '../NoResultsFound/NoResultsFound'

export function ListOfProductCardAwin () {
  const { search } = useSearch()
  const { products, getsProducts } = useProduct({ search: ' ' })
  const filterProducts = useFilter({ products })
  // const filteredProducts = filterProducts({ products })

  console.log(filterProducts)
  const hasProducts = products?.length > 0

  useEffect(() => {
    getsProducts({ search })
  }, [search])

  return (

    hasProducts
      ? (
        <>
          <Filters />
          <h2>Ofertas Populares</h2>
          <div className='container-listofproducts'>
            <section className='listofproducts'>
              <ul className='listofproducts-products'>
                {products.length === 0
                  ? <NoResultsFound />
                  : products.map((product) => {
                    const porcentaje = (((product.price.replace(/[^0-9,.]/g, '') * 100) / product.priceNow.substring(3)) - 100).toFixed(2)
                    console.log(porcentaje)
                    return (
                    <li className='container-product' key={product.id}>
                      <ProductCardAwin
                      id={product.id}
                      linkToProduct={product.linkToProduct}
                      title={product.title}
                      price={product.price}
                      priceNow={product.priceNow}
                      imageUrl={product.imageUrl}
                      description={product.description}
                      category={product.category}
                      brand={product.brand}
                      rating={product.rating}
                      porcentaje={porcentaje ? porcentaje + ' %' : '' }
                    />
                    </li>
                    )
                  })}
              </ul>
            </section>
          </div>
        </>
        )
      : (
        <NoResultsFound />
        )
  )
}
