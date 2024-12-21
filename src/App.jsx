import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Sidebar from './components/common_components/Sidebar';

// Pages
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import Dashboard from './pages/Dashboard';

const App = () => {
  const location = useLocation();

  // Hide Sidebar on authentication pages (login & signup)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Background Settings */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* Sidebar */}
      {!isAuthPage && <Sidebar />}

      {/* Main Routes */}
      <div className={`relative z-10 ${isAuthPage ? 'flex items-center justify-center w-full' : 'flex-1 overflow-auto'}`}>
        <Routes>
          {/* Dashboard Pages */}
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
