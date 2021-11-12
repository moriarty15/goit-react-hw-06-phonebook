import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  );
}

export default App;

