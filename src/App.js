import React from "react";
import "./App.css";
import VideoChat from "./VideoChat";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>WebRTC videochat</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>VideoChat</p>
      </footer>
    </div>
  );
};

export default App;
