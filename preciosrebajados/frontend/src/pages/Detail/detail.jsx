import { ProductCard } from '../../components/Products/ProductCard'
import product from '../../mocks/product.json'
import { SimilarDeals } from '../../components/Products/SimilarDeals.jsx'
export function Detail () {
  // llamada a la api para traerme el producto cambiar props segun api
  return (
    <>
    <ProductCard
    id={product.aw_product_id}
    title={product.product_name}
    description={product.description}
    price={product.search_price}
    priceNow={product.store_price}
    image={product.merchant_image_url}
    brand={product.brand_name}
    url={product.aw_deep_link}
    />
    <SimilarDeals/>
    </>

  )
}
