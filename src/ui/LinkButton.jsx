import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className =
    'uppercase text-gray-200 bg-secondary py-3 font-extrabold px-6 hover:bg-secondary-hover transition-all duration-200 text-sm';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
