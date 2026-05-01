import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// Pages
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Charts from './pages/Charts'
import Typography from './pages/Typography'
import Login from './pages/Login'

import './App.css'

function App() {
  const [active, setActive] = useState('Dashboard')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const renderPage = () => {
    switch (active) {
      case 'Dashboard': return <Dashboard />
      case 'Orders': return <Orders />
      case 'Products': return <Products />
      case 'Customers': return <Customers />
      case 'Analytics': return <Analytics />
      case 'Settings': return <Settings />
      case 'Charts': return <Charts />
      case 'Typography': return <Typography />
      case 'Login': return <Login />
      default: return <Dashboard />
    }
  }

  return (
    <div className="app-layout">
      <Sidebar active={active} setActive={setActive} />

      <div className="main-wrapper">
        <Header active={active} darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="content">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App