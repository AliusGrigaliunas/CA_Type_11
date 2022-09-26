import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import NotFoundPage from 'pages/global/not-found-page';
import GlobalLayout from 'components/layouts/global-layout';
import AuthLayout from 'pages/auth/auth-layout';
import ShopPage from 'pages/global/shop-page';
import LoginPage from 'pages/auth/login-page';
import RegisterPage from 'pages/auth/register-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
