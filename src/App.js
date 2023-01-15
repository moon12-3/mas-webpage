import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Member from './components/Member';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header type = "2"></Header>
      <Member></Member>
    </div>
  );
}

export default App;
