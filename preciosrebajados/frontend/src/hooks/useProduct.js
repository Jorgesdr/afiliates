import { useState, useRef, useCallback } from 'react'
import { getsFetchSearch, getsFetchSearchId } from '../services/getFetch.js'

export function useProduct ({ search, id }) {
  const [products, setProducts] = useState([])
  const [isError, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // console.log(products)

  const previousSearch = useRef(search)
  // podriamos recuperar la ultima keyword buscada

  const getsProducts = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setIsLoading(true)
      setError(null)
      previousSearch.current = search
      const newSearch = await getsFetchSearch({ search })
      setProducts(newSearch)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])
  const previousSearchId = useRef(id)
  const getsProductsId = useCallback(async ({ id }) => {
    if (id === previousSearchId.current) return

    try {
      setIsLoading(true)
      setError(null)
      previousSearch.current = search
      const newSearch = await getsFetchSearchId({ id })
      setProducts(newSearch)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { products, getsProducts, getsProductsId, isLoading, isError }
}
