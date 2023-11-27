import { FiltersHeader } from '../Filters/FiltersHeader.jsx'
export const NavBar = ({ changeFiltersHeader }) => {
  return (
    <div className='content-nav-top'>
      <nav className='nav-top'>
        <FiltersHeader onChange={changeFiltersHeader} />
      </nav>
    </div>

  )
}
