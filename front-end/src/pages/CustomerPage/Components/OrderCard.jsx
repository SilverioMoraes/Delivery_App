import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../CustomerPage.css';

export default function OrderCard({ id, status, saleDate, totalPrice }) {
  const history = useHistory();

  return (
    <Col xs="6" md="3">
      <div
        role="button"
        tabIndex={ 0 }
        onKeyDown={ () => history.push(`/customer/orders/${id}`) }
        onClick={ () => history.push(`/customer/orders/${id}`) }
        className="orderCard shadow-sm p-3 rounded"
      >
        <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{ status }</p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          { new Date(saleDate).toLocaleDateString('pt-br') }
        </p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>
          { totalPrice.replace('.', ',') }
        </p>
      </div>
    </Col>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
