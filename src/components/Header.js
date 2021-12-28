import React from 'react'
import './header.css'

const Header = ({applySettings, session, pomodoro, short, long}) => {

    return (
        <header>
            <button onClick={() => applySettings(pomodoro, "pomodoro")} className={`${session === "pomodoro" ? "active" : "" }`} >
                pomodoro
            </button>
            <button onClick={() => applySettings(short, "short")} className={`${session === "short" ? "active" : "" }`} >
                short break
            </button>
            <button onClick={() => applySettings(long ,"long")} className={`${session === "long" ? "active" : "" }`} >
                long break
            </button>
        </header>
    )
}

export default Header
