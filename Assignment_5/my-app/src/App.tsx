import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { ROUTE } from './constants/routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<AboutPage />} path={ROUTE.ABOUT} />
          <Route element={<HomePage />} path={ROUTE.HOME} />
          <Route element={<LoginPage />} path={ROUTE.LOGIN} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
