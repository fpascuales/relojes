import React, { useEffect, useState } from "react";
import "./Chronometer.css";
const Chronometer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((timeBefore) => timeBefore + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="chronometer">
    <h2>Cronómetro</h2>
      <div>
        <span className="timer">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
        </span>
        <span>:</span>
        <span className="timer">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
        <span>:</span>
        <span className="timer">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      {!timerOn && time === 0 && (
        <button className="btn" onClick={() => setTimerOn(true)}>INICIAR</button>
      )}
      {timerOn && time > 0 && (
        <button className="btn" onClick={() => setTimerOn(false)}>PARAR</button>
      )}
      {!timerOn && time > 0 && (
        <div>
          <button className="btn" onClick={() => setTimerOn(true)}>CONTINUAR</button>
          <button className="btn" onClick={() => setTime(0)}>REINICIAR</button>
        </div>
      )}
    </div>
  );
};

export default Chronometer;
