import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleDeleteButton = (id, name) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success(`${name} successfully deleted!`))
      .catch(() =>
        toast.error(`Something went wrong, ${name} not deleted. Try again`)
      );
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filteredContacts && (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li key={id} className={css.item}>
              {name}: {phone}
              <button
                onClick={() => handleDeleteButton(id, name)}
                className={css.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
