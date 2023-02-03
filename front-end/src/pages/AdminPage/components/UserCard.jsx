import PropTypes from 'prop-types';
import '../AdminPage.css';
import btnDelete from '../../../images/btnDelete.svg';

function UserCard({ index, name, email, role, id, deleteUser }) {
  return (
    <tr key={ index }>
      <td
        className="indexUser font-Roboto fs-3"
        data-testid={
          `admin_manage__element-user-table-item-number-${index}`
        }
      >
        { index }

      </td>
      <td
        className="nameUser font-Roboto fs-4"
        data-testid={
          `admin_manage__element-user-table-name-${index}`
        }
      >
        { name }

      </td>
      <td
        className="emailUser text-white font-Roboto fs-4"
        data-testid={
          `admin_manage__element-user-table-email-${index}`
        }
      >
        { email }

      </td>
      <td
        className="roleUser text-white font-Roboto fs-4"
        data-testid={
          `admin_manage__element-user-table-role-${index}`
        }
      >
        { role }

      </td>
      <td>
        <button
          className="btnExcluir"
          data-testid={
            `admin_manage__element-user-table-remove-${index}`
          }
          type="button"
          onClick={ () => deleteUser(id) }
        >
          <img src={ btnDelete } alt="" />
        </button>
      </td>
    </tr>
  );
}

UserCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  id: PropTypes.number,
  deleteUser: PropTypes.func,
}.isRequired;

export default UserCard;
