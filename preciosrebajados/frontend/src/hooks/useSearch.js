import { useEffect, useState, useRef, useContext } from 'react'
import { SearchContext } from '../context/searchcontext.jsx'

export function useSearch () {
  const { handleSearch, search, handleChange, searchInput, setSearch } = useContext(SearchContext)
  const [error, setError] = useState(null)

  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = search === ''
      return
    }
    if (search === '') {
      return setError('Ingrese un texto valido')
    }
    if (search.length < 3) {
      return setError('Ingrese al menos 3 caracteres')
    }
    if (search.match(/^\[0-9]+$/)) {
      return setError('Ingrese solo letras')
    }
    if (search.match(/^\d+$/)) {
      return setError('Ingrese solo letras')
    }
    setError(null)
  }, [search])

  return { search, setSearch, error, searchInput, handleSearch, handleChange }
}
