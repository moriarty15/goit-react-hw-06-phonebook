// import {useState, useEffect} from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, handleFilterChange } from "./redux/contacts/contacts-actions";

function App() {
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch();
  // вынес фильтр в функцию
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <ContactForm onSubmit={(data)=>dispatch(addContact(data))} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={(e)=>dispatch(handleFilterChange(e.target.value))} />
      <ContactList filter={visibleContacts} onDeleteContacts={(contactId)=>dispatch(deleteContact(contactId))} />
    </Container>
  );
}

export default App;

