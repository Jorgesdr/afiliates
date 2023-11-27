import { useCategory } from '../../hooks/useCategory.js'
import { useFilter } from '../../hooks/useFilter.jsx'

import { useId } from 'react'

export function Filters () {
  const { clearFilters, filters, handleCategory, handleBrand, handlePrice } = useFilter()
  const { getCategory } = useCategory([])

  const priceFilterId = useId()
  const categoryFilterId = useId()
  const brandFilterId = useId()
  // const ratingFilterId = useId()

  return (
    <section className='filters-main '>

      <div className='container-filters-main'>
        <div className='filters-price filters-grid-row'>
          <div className='filters-price-title'>
            <label htmlFor={priceFilterId}>Precio</label>
          </div>
          <div className='filters-price-input'>
            <div>
              <input
                onChange={handlePrice}
                type='range'
                id={priceFilterId}
                min='0'
                max='2000'
                value={filters.price}
              />
            </div>
            <div>
              <label>{filters.price} €</label>
            </div>
          </div>
        </div>
        <div className='filters-category filters-grid-row'>
          <div className='filters-category-title'>
            <label htmlFor={categoryFilterId}>Categorías</label>
          </div>
          <div className='filters-category-select'>
            <select id={categoryFilterId} onChange={handleCategory} value={filters.category}>
              return (
              <option value='all'>Todo</option>
              {
                            getCategory.map((category) =>
                              (
                                <option key={category.id} value={category.value}>{category.title}</option>
                              )
                            )
                        }
              )
            </select>
          </div>
        </div>
        <div className='filters-brand filters-grid-row'>
          <div className='filters-brand-title'>
            <label htmlFor={brandFilterId}>Marca</label>
          </div>
          <div className='filters-brand-select'>
            <select id={brandFilterId} onChange={handleBrand} value={filters.brand}>
              <option value='all'>Todo</option>
              <option value='Apple'>Apple</option>
              <option value='Huawei'>Huawei</option>
              <option value='OPPO'>OPPO</option>
              <option value='Samsung'>Samsung</option>
              <option value='Microsoft Surface'>Microsoft Surface</option>
              <option value='Impression of Acqua Di Gio'>Impression of Acqua Di Gio</option>
              <option value='HP Pavilion'>HP Pavilion</option>
              <option value='Royal_Mirage'>Royal Mirage</option>
              <option value='Infinix'>Infinix</option>
              <option value='Fog Scent Xpressio'>Fog Scent Xpressio</option>
              <option value='Al Munakh'>Al Munakh</option>
            </select>
          </div>
        </div>
       {/*
        <div className='filters-rating filters-grid-row'>
          <div className='filters-rating-title'>
            <label htmlFor={ratingFilterId}>Valoración</label>
          </div>
          <div className='filters-rating-select'>
            <select name='rating' id={ratingFilterId} onChange={handleRating} value={filters.rating}>
              <option value='all'>Todo</option>
              <option value='1'>1 estrellas</option>
              <option value='2'>2 estrellas</option>
              <option value='3'>3 estrellas</option>
              <option value='4'>4 estrellas</option>
              <option value='5'>5 estrellas</option>
            </select>
          </div>
        </div> */
        }
        <div className='filters-reset filters-grid-row'>
          <div className='filters-reset-title'>
            <label>Resetear filtros</label>
          </div>
          <div className='filters-reset-button'>
            <button onClick={clearFilters}>Resetear</button>
          </div>
        </div>

      </div>
    </section>
  )
}
