import React, { useRef, useState } from "react";

export default function Timer() {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    alert('Timer Stopped');
  };
  const startTimer = () => {
      intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000);
    alert('Started Timer');
  };

  return (
    <>
        <div className="row vh-100 m-0 align-items-center justify-content-center">
            <div className="col-12 text-center">
                <h2 className="mb-3">Timer: {timer}</h2>
                <button className="btn btn-success mx-4" onClick={startTimer}>Start Timer</button>
                <button className="btn btn-danger" onClick={stopTimer}>Stop Timer</button>
            </div>
        </div>
    </>
  );
}
