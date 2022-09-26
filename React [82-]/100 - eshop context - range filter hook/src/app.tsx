import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import GreekPage from 'pages/GREEKPage';
import ShopPage from './pages/shop-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GreekPage />} />
      <Route path="/shopPage" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
