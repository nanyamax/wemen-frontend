import dayjs from 'dayjs';

const Footer = () => {
  return <div className="footer">&copy; {dayjs().format('YYYY')} NanyaMax</div>;
};

export default Footer;
