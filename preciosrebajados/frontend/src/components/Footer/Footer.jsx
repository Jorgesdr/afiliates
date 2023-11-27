import { ListOfCategory } from '../Category/ListOfCategory.jsx'
import { Link } from 'wouter'

export const Footer = () => {
  return (
    <footer className='footer-footer'>

      <div className='rightereserved'>
        <p>© 2023 Precios Rebajados. Todos los derechos reservados.</p>
      </div>
      <div className='footerlinks'>
        <h3>Otros</h3>
        <div className='listfooterlinks'>
          <ul>
            <li>
              <Link to='/legal/privacy'> Política de Privacidad </Link>
            </li>
            <li>
              <Link to='/legal/cookies'> Cookies </Link>
            </li>
            <li>
              <Link to='/legal/term'>Aviso legal y Condiciones generales de uso</Link>
            </li>
            <li>
              <Link to='/'>Quienes Somos</Link>
            </li>
            <li>
              <Link to='/contact'>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='categories'>
        <h3>Categorías</h3>
        <div className='listofcategory'>
          <ListOfCategory />

        </div>
      </div>

    </footer>
  )
}
