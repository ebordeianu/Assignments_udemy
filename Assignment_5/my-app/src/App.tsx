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
          <Route element={<LoginPage />} path={ROUTE.LOGIN} />
          <Route element={<AboutPage />} path={ROUTE.ABOUT} />
          <Route element={<HomePage />} path={ROUTE.HOME} />

          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function divide(a: number, b: number): number {
  // Sure, we cannot divide by 0,
  // so in this case we will throw an error.
  if (b === 0) {
    throw new Error("You can't divide by zero.");
  }

  return Math.round(a / b);
}
