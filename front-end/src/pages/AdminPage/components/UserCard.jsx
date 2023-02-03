import PropTypes from 'prop-types';
import '../AdminPage.css';

function UserCard({ index, name, email, role, id, deleteUser }) {
  return (
    <tr key={ index }>
      <td
        className="input-group-text"
        data-testid={
          `admin_manage__element-user-table-item-number-${index}`
        }
      >
        { index }

      </td>
      <td
        className="nameUser"
        data-testid={
          `admin_manage__element-user-table-name-${index}`
        }
      >
        { name }

      </td>
      <td
        className="emailUser text-white"
        data-testid={
          `admin_manage__element-user-table-email-${index}`
        }
      >
        { email }

      </td>
      <td
        className="roleUser text-white"
        data-testid={
          `admin_manage__element-user-table-role-${index}`
        }
      >
        { role }

      </td>
      <td>
        <button
          className="btnExcluir text-white"
          data-testid={
            `admin_manage__element-user-table-remove-${index}`
          }
          type="button"
          onClick={ () => deleteUser(id) }
        >
          Excluir
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
