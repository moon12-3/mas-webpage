import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Member from "./components/Member";
import Project from "./components/Project";
import Individual from "./components/Individual";
import IndividualProject from "./components/IndividualProject";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import video from "./video/main composition_10초.mp4";

function App() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const skipped = localStorage.getItem("skipped");
    if (skipped === "true") {
      setShowVideo(false);
    }
  }, []);

  const skipVideo = () => {
    setShowVideo(false);
    localStorage.setItem("skipped", "true");
    console.log("클릭", showVideo);
  };
  return (
    <BrowserRouter>
      <Header type="2"></Header>
      {showVideo && (
        <VideoContainer className="fade-out">
          <video
            ref={videoRef}
            autoPlay
            muted
            onEnded={() => setShowVideo(false)}
            style={{ overflow: "hidden" }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <SkipButton onClick={skipVideo}>Skip</SkipButton>
        </VideoContainer>
      )}
      {!showVideo && (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/member" element={<Member />} />
          <Route path="/indi/:name" element={<Individual />} />
          <Route path="/project" element={<Project />} />
          <Route path="IndividualProject" element={<IndividualProject />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const SkipButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: black;
  border: 1px solid #999999;
  color: #ffffff;
  position: absolute;
  z-index: 999;
  left: 85%;
  top: 85%;

  &:hover {
    cursor: pointer;
  }
`;

export default App;
