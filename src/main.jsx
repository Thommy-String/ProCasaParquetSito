import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' // <--- 1. Importa questo
import App from './App.jsx'
import './index.css'

import HomePage from './pages/HomePage.jsx'
const ServicePage = lazy(() => import('./pages/servizi/[slug].jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Avvolgi tutto dentro HelmetProvider */}
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Assicurati che in App.jsx ci sia un <Outlet /> */}
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            
            {/* Questa è la rotta dinamica corretta */}
            <Route path="servizi/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><ServicePage /></Suspense>} />
            <Route path="privacy-policy" element={<Suspense fallback={<div className="min-h-screen" />}><PrivacyPolicyPage /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)