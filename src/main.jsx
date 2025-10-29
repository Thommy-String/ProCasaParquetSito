import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css' // Contiene @import "tailwindcss";

// Importa la nostra nuova homepage
import HomePage from './pages/HomePage.jsx'
// TODO: Creeremo queste pagine più avanti
// import ServiceAreaPage from './pages/ServiceAreaPage.jsx' 
// import NotFoundPage from './pages/NotFoundPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App è il layout (Header/Footer) */}
        <Route path="/" element={<App />}> 
          
          {/* La rotta principale ora carica HomePage */}
          <Route index element={<HomePage />} /> 
          
          {/* TODO: Le rotte per le aree di servizio */}
          {/* <Route path="posatore/:slugCitta" element={<ServiceAreaPage />} /> */}
          
          {/* TODO: Una rotta 404 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
