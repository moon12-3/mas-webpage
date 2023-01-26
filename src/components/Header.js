// import dummy from "../db/data.json";
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import "./css/Header.css";

function Header({type}) {
    
    // const grade = "";
    let t1 = "";
    let t2 = "";
    
    // 스크롤 감지
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
      <header className={scrollPosition < 100 ? "original_header" : "change_header"}>
          <nav className={scrollPosition < 100 ? "original_header" : "change_header"}>
              <div className="logo"></div>
              <div className="hr-div2"></div>
                
              <div className="t">
                <span className = "t1">{t1}</span>
                <span className = "t2">{t2}</span>
                </div>
              <ul className ="nav-list">
                  <li className ="nav-item"><Link to='/'>ABOUT</Link></li>
                  <li className ="nav-item"><Link to='/member'>MEMBER</Link></li>
                  <li className ="nav-item"><Link to='/project'>PROJECT</Link></li>

              </ul>
  
              <div className="hr-div"></div>
                  <ul className ="nav-right">
                      <li className ="nav-info">2021 - 2021</li>
                      <li className ="nav-info">MAS</li>
                  </ul>
                  
          </nav>
      </header>
    )
}

export default Header;
