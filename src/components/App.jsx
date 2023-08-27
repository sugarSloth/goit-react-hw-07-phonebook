import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm />
      <section className={css.contacts}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
