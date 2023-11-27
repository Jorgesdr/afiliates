import { Fire, Desktop, Shopping, Home, Toys } from '../../icons/icons.jsx'

import { useFilter } from '../../hooks/useFilter.jsx'

// import { useId } from 'react'

export const FiltersHeader = () => {
  const { handleCategoryClick } = useFilter()
  // const categoryFilterId = useId()

  return (
    <div className='filters-header'>
      <div>
        <a className='icons-filters' onClick={handleCategoryClick} value='all'>
          <label>
            <Fire to='/' />
          </label>
          <span>
            Ùltimas ofertas
          </span>
        </a>
      </div>
      <div>
        <a className='icons-filters' onClick={handleCategoryClick} value='smartphones'>
          <span>
            <Desktop />
          </span>
          <span>
            Tecnología
          </span>
        </a>
      </div>
      <div>
        <a className='icons-filters' onClick={handleCategoryClick} value='womens-jewellery'>
          <span>
            <Shopping />
          </span>
          <span>
            Compras
          </span>
        </a>
      </div>
      <div>
        <a className='icons-filters' onClick={handleCategoryClick} value='tops'>
          <span>
            <Toys />
          </span>
          <span>
            Juguetes
          </span>
        </a>
      </div>
      <div>
        <a className='icons-filters' onClick={handleCategoryClick} value='home-decoration'>
          <span>
            <Home />
          </span>
          <span>
            Hogar
          </span>
        </a>
      </div>
    </div>

  )
}
