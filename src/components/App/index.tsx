import List from '../List';
import Modal from '../Modal';
import DestinationForm from '../Modal/DestinationForm';
import './App.css';

function App() {
  return (
    <>
      <List />
      <Modal>
      <DestinationForm />
      </Modal>
    </>

  );
}

export default App;
