import dummy from "../db/data.json";
import { Link } from 'react-router-dom';

function Header({type}) {
    const grade = "1ST";
    let t1 = "";
    let t2 = "";
    if(type=="2") {
       t1="MAS MEMBER";
       t2=`${grade} MEMBER`
    }
    return (
      <header id = "nav">
          <nav className ="nav">
              <div className="logo"></div>
              <div className="hr-div2"></div>
                
              <div className="t">
                <span className = "t1">{t1}</span>
                <span className = "t2">{t2}</span>
                </div>
              <ul className ="nav-list">
                  <li className ="nav-item"><a href="/">ABOUT</a></li>
                  <li className ="nav-item"><a href="/member/member">MEMBER</a></li>
                  <li className ="nav-item"><a href="/project/project">PROJECT</a></li>
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