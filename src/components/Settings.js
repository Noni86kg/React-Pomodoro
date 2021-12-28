import React, { useState } from 'react'
import "./settings.css"

const Settings = ({settings, setSettings, setPomodoro, setShort, setLong, session, setTimer}) => {
    const [inputPomodoro, setInputPomodoro] = useState(25)
    const [inputShortBreak, setInputShortBreak] = useState(5)
    const [inputLongBreak, setInputLongBreak] = useState(15)
    const [font, setFont] = useState("'Kumbh Sans', sans-serif")
    const [color, setColor] = useState("var(--red)")

    const saveData = () => {
        setPomodoro(inputPomodoro)
        setShort(inputShortBreak)
        setLong(inputLongBreak)
        setSettings(false)

        document.documentElement.style.setProperty('--fontFamily', font)
        document.documentElement.style.setProperty('--bgcolor', color)

        if (session === "pomodoro") {
            setTimer(inputPomodoro * 60);
          } else if (session === "short") {
            setTimer(inputShortBreak * 60);
          } else {
            setTimer(inputLongBreak * 60);
          } 
    }

    return (
        <div className={`${!settings ? "display-none" : "overlay" }`} style={{height: window.innerHeight}} onClick={(e) => e.target.className === "overlay" && setSettings(false)} >
            <div className="settings">
                <div className="top-settings">
                    <h2>Settings</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setSettings(false)} className='close-div' width="14" height="14"><path className='close-btn' fill="#1E213F" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                </div>
                <div className="time-editor">
                    <h3>TIME (MINTES)</h3>
                    <div className="inputs">

                        <div className="input-pomodoro">
                            <p>pomodoro</p>
                            <input type="number" value={inputPomodoro} onChange={e => setInputPomodoro(e.target.value)} />
                        </div>

                        <div className="input-short-break">
                            <p>short break</p>
                            <input type="number"  value={inputShortBreak} onChange={e => setInputShortBreak(e.target.value)}  />
                        </div>

                        <div className="input-long-break">
                            <p>long break</p>
                            <input type="number"  value={inputLongBreak} onChange={e => setInputLongBreak(e.target.value)}  />
                        </div>

                    </div>

                    <div className="font">
                        <h3>FONT</h3>
                        <div className="font-right-side">
                            <h5 className={`${font === "'Kumbh Sans', sans-serif" ? 'kumbh active' : 'kumbh'}`} onClick={() => setFont("'Kumbh Sans', sans-serif")}>Aa</h5>
                            <h5 className={`${font === "'Roboto Slab', serif" ? 'roboto active' : 'roboto'}`} onClick={() => setFont("'Roboto Slab', serif")}>Aa</h5>
                            <h5 className={`${font === "'Space Mono', monospace" ? 'space active' : 'space'}`} onClick={() => setFont("'Space Mono', monospace")}>Aa</h5>
                        </div>
                    </div>

                    <div className="color">
                        <h3>color</h3>
                        <div className="font-right-side">
                            <div className={`${color === "var(--red)" ? 'color-btn red check' : 'color-btn red'}`} onClick={() => setColor("var(--red)")}></div>
                            <div className={`${color === "var(--turquoise)" ? 'color-btn turquoise check' : 'color-btn turquoise'}`} onClick={() => setColor("var(--turquoise)")}></div>
                            <div className={`${color === "var(--purple)" ? 'color-btn purple check' : 'color-btn purple'}`} onClick={() => setColor("var(--purple)")}></div>
                        </div>
                    </div>

                    <button className="apply-btn" onClick={() => saveData()}>Apply</button>

                </div>
            </div>
        </div>
    )
}

export default Settings
