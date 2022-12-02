import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import HeaderNavigation from '../HeaderNavigation';

export default function HomePage() {
  return (
    <div>
      <HeaderNavigation />
      <h1>Home Page</h1>
      <Link to={ROUTE.LOGIN}>Logout</Link>
    </div>
  );
}
