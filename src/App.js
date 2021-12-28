import React, { useState, useEffect } from "react"
import Header from "./components/Header";
import Cloak from "./components/Cloak";
import Settings from "./components/Settings";
import { IoIosSettings } from "react-icons/io";

function App() {
  const [pomodoro, setPomodoro] = useState(25);
  const [short, setShort] = useState(5);
  const [long, setLong] = useState(15);
  const [startTime, setStartTime] = useState(false);
  const [timer, setTimer] = useState(25 * 60);
  const [session, setSession] = useState("pomodoro");
  const [settings, setSettings] = useState(false)


  function applySettings(time, session) {
    setStartTime(false);
    setTimer(time * 60);
    setSession(session);
  }

  const sessionFunc = () => {
    setStartTime(false)
    if (session === "pomodoro") {
      setTimer(pomodoro * 60);
    } else if (session === "short") {
      setTimer(short * 60);
    } else {
      setTimer(long * 60);
    } 
  }

  const opetSettings = () => {
    setSettings(true)
    sessionFunc()
  }
  

  useEffect(() => {
    if (startTime) {
      if (timer > 0) {
        let interval = setInterval(() => {
          setTimer((seconds) => seconds - 1);
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      } else {
        sessionFunc()
      }
    }
  }, [startTime, timer]);

  return (
    <div className="app">
      <h2>pomodoro</h2>
      <Header applySettings={applySettings} session={session} pomodoro={pomodoro} short={short} long={long} />
      <Cloak setStartTime={setStartTime} startTime={startTime} session={session} timer={timer} pomodoro={pomodoro} short={short} long={long} />
      <IoIosSettings className='settings-icon' onClick={() => opetSettings()}/>
      <Settings settings={settings} setSettings={setSettings} setPomodoro={setPomodoro} setShort={setShort} setLong={setLong} setTimer={setTimer} session={session} />
    </div>
  );
}

export default App;
