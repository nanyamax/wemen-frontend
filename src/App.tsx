import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/user';
import Layout from './pages/layout';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
