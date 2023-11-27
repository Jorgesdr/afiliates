import logo from '../../assets/logo_transparent.png'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import { Link } from 'wouter'

export const Header = () => {
  return (

    <header className='header'>
      <div className='container-header'>
        <div className='container-logo'>
          <span>
            <Link to='/'>
              <img className='App-logo' src={logo} />
            </Link>
          </span>
        </div>
        <div className='container-input'>
          <SearchBar />
        </div>
        <div className='container-icons'>
          <a href='#login'>
            <span>Login / Register</span>
          </a>
        </div>
      </div>
    </header>

  )
}
