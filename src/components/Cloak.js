import React from 'react'
import './cloak.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Cloak = ({setStartTime, startTime, session, timer, pomodoro, short, long}) => {
let percentage

        if (session === "pomodoro") {
            percentage = Math.round(100 - (timer / (pomodoro * 60 / 100)));
        } else if (session === "short") {
            percentage = Math.round(100 - (timer / (short * 60 / 100)));
        } else if (session === "long") {
            percentage = Math.round(100 - (timer / (long * 60 / 100)));
        }


    return (
        <main>
            <div className="central">
            <CircularProgressbar value={percentage}>
            
            </ CircularProgressbar>
            <div className="display-time">
                <h1>{Math.floor(timer / 60) < 10 ? "0" + Math.floor(timer / 60) : Math.floor(timer / 60)}
                :
                {Math.floor(timer % 60) < 10 ? "0" + Math.floor(timer % 60) : Math.floor(timer % 60)}</h1>
                <button className='btn-start' onClick={() => setStartTime(!startTime)}>{startTime ? <h3>PAUSE</h3> : <h3>START</h3> }</button>
            </div>
            
            </div>
        </main>
    )
}

export default Cloak
