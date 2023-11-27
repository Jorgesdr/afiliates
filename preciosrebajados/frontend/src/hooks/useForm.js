import { useSearch } from 'hooks/useSearch'

export function useForm ({ keyword } = {}) {
  const { isError, setGetSearch } = useSearch({ })

  const handleSubmit = (e) => {
    e.preventDefault()

    setGetSearch(e.target.value)
    // navegar a ruta /search
  }

  const handleChange = (e) => {
    setGetSearch(e.target.value)
  }
  return { isError, handleSubmit, handleChange, keyword }
}
