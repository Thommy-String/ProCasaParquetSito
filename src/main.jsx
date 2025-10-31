import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import ServicePage from './pages/servizi/[slug].jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="servizi/:slug" element={<ServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
