import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/common_components/Sidebar'

import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import SalesPage from './pages/SalesPage'
import OrdersPage from './pages/OrdersPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import Profile from './pages/Profilepage'



const App = () => {
  return (
    <div className='flex h-scree overflow-hidden'>

      {/* BACKGROUND SETTINGS */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br opacity-80' />
        <div className='absolute inset-0 backdrop-blur-3xl' />
      </div>


      <Sidebar />
      {/* <Profile/> */}


      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>

    </div>
  )
}

export default App