import './App.css'
import { Header } from './components/Header/Header'
// import { FiltersHeader } from './components/Filters/FiltersHeader'
import { SearchProvider } from './context/searchcontext'
import { ButtonUp } from './components/Buttons/ButtonUp'
import { Footer } from './components/Footer/Footer'
import { Switch, Route } from 'wouter'
import { Privacy } from './pages/Legal/privacy'
import { Cookies } from './pages/Legal/cookies'
import { Term } from './pages/Legal/term'
import { Contact } from './components/Contact/Contact'
import { CookiesBar } from './components/Cookies/CookiesBar'
import { Home } from './pages/Home/home'
import { Detail } from './pages/Detail/detail'
import { ListOfProductCardAwin } from './components/Products/ListOfProductCardAwin'
import { NavBar } from './components/NavBar/NavBar'

function App () {
  return (
     <SearchProvider>
    <>
    <div className='app'>
      <Header />
      <NavBar />
      <main className='main-content'>
        <Switch>
        <Route path='/' component={Home} />
        <Route path='/ofertas/search/:keyword?' component={ListOfProductCardAwin} />
        <Route path='/ofertas/brand/:brand?' component={ListOfProductCardAwin} />
        <Route path='/ofertas/:keyword?' component={ListOfProductCardAwin} />
        <Route path='/legal/privacy' component={Privacy} />
        <Route path='/legal/cookies' component={Cookies} />
        <Route path='/legal/term' component={Term} />
        <Route path='/contact' component={Contact} />
        <Route path='/ofertas/categorias/:category?/price/:price?/brand/:brand?/rating/:rating?' component={ListOfProductCardAwin} />
        <Route path='/ofertas/categorias/:category?' component={ListOfProductCardAwin} />
        <Route path='/:keyword' component={Detail} />
        <Route path='/:title/:keyword' component={Detail} />
      </Switch>
      </main>
      <Footer />
    </div>
    <CookiesBar />
    <ButtonUp />
    </>
   </SearchProvider>

  )
}

export default App
