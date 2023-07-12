import './App.css';
import { data } from '../data/data.js';
import UsersList from '../components/UsersList';
import Header from '../components/Header';

const App = () => (
  <>
    <Header>The users:</Header>
    <UsersList data={data} />
  </>
);

export default App;
