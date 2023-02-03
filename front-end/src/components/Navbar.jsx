import { Link, useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();
  function handleOnClickLoggout() {
    localStorage.clear();
    history.push('/login');
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header
      className="navbarAdminPage d-flex shadow-sm
    justify-content-between align-items-center px-5 py-2"
    >
      <div className="d-flex gap-4 align-items-center">
        <img src={ logo } alt="logo" className="logo" />
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>

        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user?.name}
      </span>

      <button
        onClick={ handleOnClickLoggout }
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}
