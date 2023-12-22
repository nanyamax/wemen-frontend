import { Outlet, Link } from 'react-router-dom';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
      <ToastContainer style={{ width: '5rem', height: '3rem' }} />
    </>
  );
};

export default Layout;
