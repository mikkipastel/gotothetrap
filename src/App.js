import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      window.location = "https://www.youtube.com/watch?v=4QsmR2mb8_U";
    }
  });
  return (
    <main>
      <h1>YOU'RE TRAPPED.</h1>
      <center>
        <img height="300px" src="https://c.tenor.com/C2PJ_qyD-OwAAAAd/pink-bitch-club-minako.gif"/>
      </center>
      <h2 id="text_count_down">{seconds}</h2>
    </main>
  );
}

export default App;
