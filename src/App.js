import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Member from './components/Member';
import Project from './components/Project';
import Individual from './components/Individual';
import IndividualProject from './components/IndividualProject';
import { useCookies } from 'react-cookie';
import moment from 'moment';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import video from './video/main composition_10초.mp4';
function App() {
  const COOKIE_KEY = 'video';
  const [cookies, setCookie] = useCookies([COOKIE_KEY]);
  const [fadeInOut, setFadeInOut] = useState('');


  const hideVideo = () => {
    const decade = moment();
    decade.add(10, 'm');
    setCookie(COOKIE_KEY, 'true', {path:'/', expires: decade.toDate()});
  }
  
  setTimeout(() => {
    hideVideo();
    setFadeInOut('fade-out');
    setTimeout(()=> {document.getElementById("video").style.zIndex = -1;}, 500);
    
  }, 10000);

  return (
    <BrowserRouter>
          {
        // cookies[COOKIE_KEY] ? null : (
          
            <video autoPlay muted id = "video" className ={"video " + fadeInOut}>
                <source src={video} type="video/mp4"/>
            </video>
        //  )
      }
      <Header type = "2"></Header>
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
