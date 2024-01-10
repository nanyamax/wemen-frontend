import Menu from '../components/menu';
import Footer from '../components/footer';
import { ToastContainer } from 'react-toastify';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
      <ToastContainer style={{ width: '5rem', height: '3rem' }} />
    </>
  );
};

export default Layout;
