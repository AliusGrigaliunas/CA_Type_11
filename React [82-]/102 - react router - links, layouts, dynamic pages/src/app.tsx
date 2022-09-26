import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import NotFoundPage from 'pages/not-found-page';
import ApplicationBar from 'components/partials/application-bar';
import ShopPage from './pages/shop-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

const App: React.FC = () => (
  <BrowserRouter>
    <ApplicationBar />

    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
