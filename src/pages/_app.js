import React from "react";
import "../App.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <header>
        <h1>WebRTC videochat</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <p>VideoChat</p>
      </footer>
    </div>
  );
}
