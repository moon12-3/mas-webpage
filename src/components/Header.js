// import dummy from "../db/data.json";
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";
// import React, {useState, useEffect} from 'react';
import logo from '../img/logo.png';

function Header({type}) {
    
    // const grade = "";
    let t1 = "";
    let t2 = "";
    
    // 스크롤 감지
    // const [position, setPosition] = useState(window.pageYOffset)
    // const [visible, setVisible] = useState(true) 
    // useEffect(()=> {
    //     const handleScroll = () => {
    //        let moving = window.pageYOffset
           
    //        setVisible(position > moving);
    //        setPosition(moving)
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return(() => {
    //        window.removeEventListener("scroll", handleScroll);
    //     })
    // })

    // const cls = visible ? "original_header" : "change_header";

    return (
        // <header className={cls}>
        <header>
            <nav>
              <div className="logo"><img src={logo}/></div>
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
