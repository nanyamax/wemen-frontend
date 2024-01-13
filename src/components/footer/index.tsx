import dayjs from 'dayjs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">&copy; {dayjs().format('YYYY')} NanyaMax</div>
    </div>
  );
};

export default Footer;
