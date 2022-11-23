import logo from './logo.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div
    className="App"
    style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      
    <Nav />
   
    <ItemListContainer />

    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
