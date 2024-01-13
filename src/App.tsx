import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import './styles/global.css';
import HomePage from './pages/home';
import Menu from './components/menu';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import PeriodCalculators from './pages/periodCalculator';
import React from 'react';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container fluid className="app-home">
        <div className="home-backgroud">
          <Menu />
          <div className="app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route
                path="/periodCalculator"
                element={<PeriodCalculators />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Container>
      <ToastContainer
        hideProgressBar={true}
        position={'bottom-right'}
        autoClose={1500}
      />
    </BrowserRouter>
  );
};

export default App;
