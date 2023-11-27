import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filterscontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>
  <FiltersProvider>
    <App />
  </FiltersProvider>
    </StrictMode>

)
