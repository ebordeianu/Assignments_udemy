import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import './style.css';

export default function HeaderNavigation() {
  return (
    <div id='header'>
      <Link id='home_link' to={ROUTE.HOME}>
        HOME
      </Link>
      <Link id='about_link' to={ROUTE.ABOUT}>
        ABOUT
      </Link>
    </div>
  );
}
