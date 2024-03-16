import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Member from "./components/Member";
import Project from "./components/Project";
import Individual from "./components/Individual";
import IndividualProject from "./components/IndividualProject";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header type="2"></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member" element={<Member />} />
        <Route path="/indi/:name" element={<Individual />} />
        <Route path="/project" element={<Project />} />
        <Route path="IndividualProject" element={<IndividualProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
