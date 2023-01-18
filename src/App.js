import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Member from './components/Member';
import Project from './components/Project';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header type = "2"></Header>
      <Member></Member>

      <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/project" element={<Project/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
