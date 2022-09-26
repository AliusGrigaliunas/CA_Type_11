import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import NotFoundPage from 'pages/not-found-page';
import GlobalLayout from 'components/layouts/global-layout';
import ShopPage from './pages/shop-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default App;
