import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyGlassFooter from './components/StickyGlassFooter'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <Header></Header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
     
      <Footer />
      <StickyGlassFooter />
      
    </div>
  )
}

export default App
