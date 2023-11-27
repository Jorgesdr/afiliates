import { useContext } from 'react'
import { FiltersContext } from '../context/filterscontext.jsx'

export function useFilter () {
  const { clearFilters, handleCategoryClick, handleCategory, handleRating, handleBrand, handlePrice, filters, setFilters } = useContext(FiltersContext)

  const filterProducts = ({ products }) => {
    return (
      products?.filter(product => {
        return (
          (
            product.price >= filters.price) &&
          (
            filters.brand === 'all' ||
              product.brand === filters.brand
          ) &&
          (
            filters.category === 'all' ||
              product.category === filters.category
          ) &&
          (
            filters.rating === 'all' ||
              product.rating >= filters.rating
          )

        )
      }))
  }

  return { filters, clearFilters, handleCategoryClick, filterProducts, setFilters, handleCategory, handleRating, handleBrand, handlePrice }
}
