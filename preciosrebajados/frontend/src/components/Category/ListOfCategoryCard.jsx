import { CategoryCard } from './CategoryCard'
import { useCategory } from '../../hooks/useCategory.js'
import { useFilter } from '../../hooks/useFilter'
import { NoResultsFound } from '../NoResultsFound/NoResultsFound.jsx'

// import categories from '../../mocks/categories.json'

const randonNumber = Math.floor(Math.random() * 20)
const randonNumberPLus = randonNumber + 8

export function ListOfCategoryCard () {
  const { getCategory, loading } = useCategory()
  const { handleCategoryClick } = useFilter()

  return (
    <div className='container-category-card'>
      <h2>Ofertas por Categorías</h2>
          <section className='listofcategory-card'>
            <ul className='listofcategory-category'>

                {getCategory.length === 0 && !loading && <NoResultsFound/>}
                {getCategory.length > 0 && loading && <p>Cargando...</p>}

                {
                getCategory.slice(randonNumber, randonNumberPLus).map((category) => (
                  <li key={category.id} className='listofcategory-li' onClick={handleCategoryClick} value={category.value}>
                    <CategoryCard
                      value={category.value}
                      id={category.id}
                      title={category.title}
                      imageurl={category.image}
                      description={category.description}
                      url={category.url}
                    />
                  </li>

                ))
                }

            </ul>

          </section>
        </div>
  )
}
