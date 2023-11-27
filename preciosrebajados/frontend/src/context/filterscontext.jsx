import { createContext, useState } from 'react'
import { useLocation } from 'wouter'
import { useGotop } from '../hooks/useGotop'
// 1.createContext
export const FiltersContext = createContext()
// 2.Provider
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0,
    brand: 'all',
    size: 'all',
    color: 'all',
    rating: 0
  })
  const [location] = useLocation()
  const { scrollTop } = useGotop()

  const handleCategoryClick = (e) => {
    e.preventDefault()
    if (e.currentTarget.getAttribute('value') !== null) {
      const value = e.currentTarget.getAttribute('value')
      setFilters(prevState => ({ ...prevState, category: value }))
      scrollTop()
      // setLocation(`/ofertas/categorias/${value}`)
    } else if (e.target.value !== null) {
      setFilters(prevState => ({ ...prevState, category: e.target.value }))
      scrollTop()
      // setLocation(`/ofertas/categorias/${e.target.value}`)
    }
  }

  const handleCategory = (e) => {
    e.preventDefault()
    const value = e.target.value
    setFilters(prevState => ({ ...prevState, category: value }))
    // setLocation(`/ofertas/categorias/${e.target.value}/price/${filters.price}/brand/${filters.brand}/rating/${filters.rating}`)
  }

  const clearFilters = (e) => {
    e.preventDefault()
    const value = 'all'
    setFilters(
      prevState => ({
        ...prevState,
        category: value,
        price: 0,
        brand: value,
        size: value,
        color: value,
        rating: 0
      })
    )
    // setLocation(`/ofertas/categorias/${value}/price/${0}/brand/${value}/rating/${0}`)
  }
  const handlePrice = (e) => {
    e.preventDefault()
    setFilters(
      prevState => ({ ...prevState, price: e.target.value }))
    // setLocation(`/ofertas/categorias/${filters.category}/price/${e.target.value}/brand/${filters.brand}/rating/${filters.rating}`)
  }
  const handleBrand = (e) => {
    e.preventDefault()
    setFilters(
      prevState => ({ ...prevState, brand: e.target.value }))
    // setLocation(`/ofertas/categorias/${filters.category}/price/${filters.price}/brand/${e.target.value}/rating/${filters.rating}`)
  }
  const handleRating = (e) => {
    e.preventDefault()
    setFilters(prevState => ({ ...prevState, rating: e.target.value }))
    // setLocation(`/ofertas/categories/${filters.category}/price/${filters.price}/brand/${filters.brand}/rating/${e.target.value}`)
  }

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      handleCategory,
      clearFilters,
      handleRating,
      handleBrand,
      handlePrice,
      handleCategoryClick,
      location
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
