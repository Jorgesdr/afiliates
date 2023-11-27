import { useEffect } from 'react'
import './contact.css'
import { FormContact } from './FormContact'

export function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='contact'>
      <h1>Contacto</h1>
      <div className='contact-info'>
      <p>Si tienes alguna duda o sugerencia,
        puedes contactar con nosotros a través de nuestro correo electrónico :
        <a href='mailto:admin@preciosrebajados.com'> admin@preciosrebajados.com </a>
        o rellenando el siguiente formulario:
        </p>
        <div className='form'>
        <FormContact />
        </div>
      </div>
    </div>
  )
}
