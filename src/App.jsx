import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import InstallationQuiz from './components/InstallationQuiz'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <Header></Header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default App
