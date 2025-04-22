import { useState, useEffect } from "react";
import "./styles.css";

const traficLights = {
  red: {
    time: 5,
    next: "yellow",
  },
  yellow: {
    time: 3,
    next: "green",
  },
  green: {
    time: 5,
    next: "yellow 2",
  },
  "yellow 2": {
    time: 3,
    next: "red",
  },
};
export default function App() {
  const [cur, setCur] = useState("red");
  const [isActive, setIsActive] = useState(false);
  const [curTime, setCurTime] = useState(5);
  useEffect(
    function () {
      let id;
      id = setInterval(() => {
        if (isActive) setCurTime((time) => (time > 0 ? time - 1 : 0));
        if (isActive && curTime === 0) {
          setCur(traficLights[cur].next);
          let next = traficLights[cur].next;
          setCurTime(traficLights[next].time);
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [isActive, cur, curTime]
  );
  return (
    <div className="App">
      <div className="container">
        <div className={`light red ${cur === "red" ? "active" : ""}`}></div>
        <div
          className={`light yellow ${
            cur === "yellow" || cur === "yellow 2" ? "active" : ""
          }`}
        ></div>
        <div className={`light green ${cur === "green" ? "active" : ""}`}></div>
      </div>
      <h1 className="counter" style={{ color: cur.split(" ")[0] }}>
        {curTime}
      </h1>
      <button onClick={() => setIsActive((state) => !state)}>
        {isActive ? "Stop" : "Start"}
      </button>
    </div>
  );
}
