import React from 'react';
import { FullPage, Slide } from 'react-full-page';

function Main() {
    return(
        <>
        
        <FullPage controls>
           
            <Slide>
            <section id = "panel" class="panel container">
                <div className="main-text">
                        <li className ="name-text">My Ability</li>
                        <li className ="name-text">Share.</li>
                        <li className ="intro-text">나누며 성장하는 우리, MAS 입니다. 여기는 이정도 길이로 설명글이 세 줄 정도 들어가면 좋을 것 같은데 머리를 다같이 쥐어짜낼 부분이 되었네</li>
                </div>
                <div className="the-text">
                    <div className="moon">
                        <div className="title">THE MOON  원동력</div>
                        <p className="content">나누며 성장하는 우리, MAS 입니다. 여기는 이정도 길이로 설명글이 세 줄 정도 들어가면 좋을 것 같은데 머리를 다같이 쥐어짜낼 부분이 되었네요  </p>
                    </div>
                    <div className="sun">
                        <div className="title">THE MOON  목표</div>
                        <p className="content">나누며 성장하는 우리, MAS 입니다. 여기는 이정도 길이로 설명글이 세 줄 정도 들어가면 좋을 것 같은데 머리를 다같이 쥐어짜낼 부분이 되었네요  </p>
                    </div>
                    <div className="mars">
                        <div className="title">THE MOON  현재</div>
                        <p className="content">나누며 성장하는 우리, MAS 입니다. 여기는 이정도 길이로 설명글이 세 줄 정도 들어가면 좋을 것 같은데 머리를 다같이 쥐어짜낼 부분이 되었네요  </p>
                    </div>
                </div>
            </section>
            </Slide>
            <Slide>
            <section id = "panel" className="panel2 container">
                <div className="sub-main-text">
                    <p>나누며</p>
                    <p>성장하는</p>
                    <div className="sub-sub-text">
                        <span className ="sub-content">나누며 성장하는 우리, MAS 입니다. 여기는 이정도 길이로 설명글이 세 줄 정도 들어가면 좋을 것 같은데 머리를 다같이 쥐어짜낼 부분이 되었네요</span>
                    </div>
                </div>
                <div className="sub-img">
                    <img className = "img" src="../img/MAS SUB PICTURE.png" alt=""></img>
                </div>
            </section>
            </Slide>
            <Slide>
            <section id = "panel" className="f-panel container">
                <div className="footer">
                    <div className="section">
                        <div className="f-title">MAS WEBSITE</div>
                        <p className="f-content">About</p>
                        <p className="f-content">Member</p>
                        <p className="f-content">Project</p>
                    </div>
                    <div className="section">
                        <div className="f-title">MAS WEBPAGE</div>
                        <p className="f-content">주소</p>
                        <p className="f-content">문의</p>
                        <p className="f-content">비울지 말지</p>
                    </div>
                    <div className="section">
                        <div className="f-title">Official Channels</div>
                        <p className="f-content">Facebook</p>
                        <p className="f-content">Instagram</p>
                    </div>
                </div>
            </section>
            </Slide>
        </FullPage>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
    </>
    )
}

export default Main;