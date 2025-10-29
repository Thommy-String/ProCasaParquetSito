import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <Header></Header>
      
      {/* Questo componente speciale di React Router caricherà 
          la pagina corretta (es. HomePage) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default App
