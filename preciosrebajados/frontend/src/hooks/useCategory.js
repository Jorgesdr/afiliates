import { useState, useEffect } from 'react'
import { getsFetchCategoryProducts, getsFetchCategory } from '../services/getFetch.js'

export function useCategory () {
  const [getCategory, setGetCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getsCategory = async () => {
    try {
      setLoading(true)
      setError(null)
      const categories = await getsFetchCategory()
      setGetCategory(categories)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getsCategory()
  }, [])

  return { getCategory, loading, error }
}
export function UseCategoryProducts () {
  const [getCategoryProducts, setGetCategoryProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getsCategoryProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const categories = await getsFetchCategoryProducts()
      setGetCategoryProducts(categories)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getsCategoryProducts()
  }, [])

  return { getCategoryProducts, loading, error }
}
