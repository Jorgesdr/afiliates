import { useState } from 'react'
export function FormContact () {
  const [characters, setCharacters] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const newCharacters = e.target.value
    setCharacters(newCharacters)
  }
  return (
    <form onSubmit={handleSearch} className='form-form'>
          <label>Correo electrónico</label>
          <input type='text' placeholder='Introduce tu correo electrónico' />
          <label>Asunto <span >(máx 1000 caracteres / {characters.length})</span></label>
          <textarea placeholder='Escribe el asunto' maxLength='1000' onChange={handleChange}/>
          <button> Enviar </button>
    </form>
  )
}
