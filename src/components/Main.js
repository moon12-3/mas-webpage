import React from 'react';
import { FullPage, Slide } from 'react-full-page';

function Main() {
    return(
        <>
        
        <FullPage>
           
            <Slide>
            <section id = "panel" class="panel container">
                <div className="main-text">
                        <li className ="name-text">My Ability</li>
                        <li className ="name-text">Share.</li>
                        <li className ="intro-text">나누며 성장하는 우리, MAS입니다. 서로의 재능을 나누며 성장하고 더 많은 발전 가능성의 길을 열어 보다 나은 가치를 도출하기 위해 노력합니다.</li>
                </div>
                <div className="the-text">
                    <div className="moon">
                        <div className="title">THE MOON  원동력</div>
                        <p className="content">프로젝트를 함께 진행할 팀원을 쉽게 모으고, 다양한 협업을 통해 동아리 구성원들의 능력과 관계를 발전시키는 것을 목표삼아 나아갑니다.</p>
                    </div>
                    <div className="sun">
                        <div className="title">THE MOON  목표</div>
                        <p className="content">자유로운 분위기 속에서 원활한 협동을 통해, 새로운 시각과 자유로운 사고로 더 나은 발전과 미래를 보기 위해 노력합니다.</p>
                    </div>
                    <div className="mars">
                        <div className="title">THE MOON  현재</div>
                        <p className="content">포트폴리오를 채우고 개발 및 디자인 능력을 키울 수 있도록 여러 프로젝트를 진행하고 있습니다. 수상 이력을 쌓아가며 자신의 가치를 높이기 위해 활동합니다.</p>
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
                        <span className ="sub-content">나누며 성장하는 것은 중요한 가치입니다. 하나에서만 머무르지 않고 그 이상을 나누며 스스로 성장할 수 있는 길을 만듭니다.</span>
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