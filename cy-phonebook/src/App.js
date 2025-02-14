import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import SearchForm from './component/SearchForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <h1 className="title">CY'S PHONEBOOK📲</h1>
      <Container className='container'>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <SearchForm />
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
