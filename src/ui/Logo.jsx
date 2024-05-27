import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src="src/assets/shared/desktop/logo.svg" alt="audiophile logo" />
    </Link>
  );
}

export default Logo;
