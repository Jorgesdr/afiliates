import { useSearch } from '../../hooks/useSearch'

export function SearchBar () {
  const { search, handleSearch, handleChange, searchInput } = useSearch()

  return (

    <form onSubmit={handleSearch} value={search}>
      <input
        value={searchInput}
        name='input'
        type='text'
        placeholder='Buscar Ofertas'
        onChange={handleChange}
      />
      <button type='submit'>Buscar</button>
    </form>

  )
}
