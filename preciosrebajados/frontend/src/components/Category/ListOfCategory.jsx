import { useCategory } from '../../hooks/useCategory.js'
import { useFilter } from '../../hooks/useFilter.jsx'
import { Category } from './Category.jsx'

export function ListOfCategory () {
  const { getCategory } = useCategory()
  const { handleCategoryClick } = useFilter()

  return (
      <section className='listcategory'>
        <ul className='listofcategory-category'>
          {

            getCategory.map((category) => (
              <li key={category.id} value={category.value} onClick={handleCategoryClick}>
                  <Category
                      title={category.title}
                      url={category.url}
                  />
              </li>
            ))
          }
        </ul>
      </section>

  )
}
