import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [time, setTime] = useState('...');
  useEffect(() => {
    let cdDate = new Date("Jun 13, 2023 16:30:00").getTime();
    let x = setInterval(() => {
      let today = new Date().getTime();
      let distance = cdDate - today;
      let tOne = 1000 * 60;
      let tTwo = tOne * 60;
      let tThree = tTwo * 24;
      let days = Math.floor(distance / tThree);
      let hours = Math.floor((distance % tThree) / tTwo);
      let mins = Math.floor((distance % tTwo) / tOne);
      let sec = Math.floor((distance % tOne) / 1000);

      setTime(`${days} días - ${hours} h : ${mins} m : ${sec} s`);

      if (distance < 0) {
        clearInterval(x);
        setTime("LLEGÓ EL DÍA!!");
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <p>Tiempo para la presentación del proyecto:</p>
      <p>{time}</p>
    </div>
  );
};

export default Countdown;
