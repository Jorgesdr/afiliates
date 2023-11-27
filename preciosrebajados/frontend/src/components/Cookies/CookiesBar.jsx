import { useEffect, useState } from 'react'
export function CookiesBar () {
  const [cookies, setCookies] = useState('')

  useEffect(() => {
    if (localStorage.getItem('cookies') === 'cookiesbarhidden') {
      localStorage.setItem('cookies', 'cookiesbarhidden')
      const cookiesData = localStorage.getItem('cookies')
      setCookies(cookiesData)
    }
  }, [])

  const handleCookies = () => {
    if (localStorage.getItem('cookies') === null) {
      localStorage.setItem('cookies', 'cookiesbarhidden')
      const cookiesData = localStorage.getItem('cookies')
      setCookies(cookiesData)
    } else if (localStorage.getItem('cookies') === 'cookiesbarhidden') {
      localStorage.setItem('cookies', 'cookiesbarhidden')
      const cookiesData = localStorage.getItem('cookies')
      setCookies(cookiesData)
      console.log(cookiesData)
    }
  }

  return (
    <div className={`cookiesbar ${cookies}`}>
            <div className='cookiesbar__text'>
                <p>

                    Con su consentimiento, nosotros y nuestros socios utilizamos cookies o tecnologías similares para almacenar,
                    acceder y tratar datos personales como su visita a esta página web, las direcciones de IP y los identificadores de cookies.
                    <br/>Algunos socios no requieren su consentimiento para tratar sus datos y se amparan en su interés comercial legítimo.
                    Puede retirar su consentimiento o rechazar el tratamiento de los datos en función de su interés legítimo en cualquier momento,
                    pulsando en <span> Más información </span> en nuestra <a href="www.preciosrebajados.com/legal/privacy"><span> Política de privacidad </span></a>de esta página web.
                    <a href="www.preciosrebajados.com/legal/cookies"><span> Más informacion</span></a>

                </p>

                <button onClick={handleCookies} className='cookiesbar__button'>Aceptar todas las Cookies</button>
                {/* <button onClick={handleCookies} className='cookiesbar__button'>Aceptar Cookies necesarias</button> */}
            </div>
    </div>
  )
}
