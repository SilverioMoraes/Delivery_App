import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import '../pages/AdminPage/AdminPage.css';

function NavbarAdmin() {
  const history = useHistory();

  function handleOnClickLoggout() {
    localStorage.clear();
    history.push('/login');
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container className="navbarAdminPage m-0">
      <header className="">
        <Row className="d-flex justify-content-between">
          <Col sm="6">
            <span
              className="text-white font-Roboto fs-4 fw-bold"
              data-testid="customer_products__element-navbar-link-orders"
            >
              GERENCIAR USUÁRIOS
            </span>
          </Col>

          <Col sm="6">
            <span
              className="text-white font-Roboto fs-4 fw-bold"
              data-testid="customer_products__element-navbar-user-full-name"
            >
              {user?.name}
            </span>

            <button
              onClick={ handleOnClickLoggout }
              type="button"
              className="btnSair text-white font-Roboto fs-4 fw-bold"
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Col>
        </Row>
      </header>

    </Container>
  );
}

export default NavbarAdmin;
