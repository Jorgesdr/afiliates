import { createContext, useState } from 'react'
import { useLocation } from 'wouter'

export const SearchContext = createContext({
  search: '',
  setSearch: () => {},
  handleSearch: () => {},
  handleChange: () => {},
  location: ''
})

export function SearchProvider ({ children }) {
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [location, setLocation] = useLocation()

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(search)
    console.log(search)
    setLocation(`/ofertas/search/${search}`)
  }
  const handleChange = (e) => {
    e.preventDefault()
    const newSearch = e.target.value
    setSearchInput(newSearch)
    /* if (newSearch === '') {
      setLocation('/')
    }
    setLocation(`/search/${search}`) */
  }

  return (
    <SearchContext.Provider value={{
      search,
      setSearch,
      handleSearch,
      handleChange,
      searchInput,
      setSearchInput,
      location

    }}
    >
      {children}
    </SearchContext.Provider>
  )
}
