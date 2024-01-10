import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/user';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import './styles/global.css';
import HomePage from './pages/home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
