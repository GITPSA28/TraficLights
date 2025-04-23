import { useEffect } from "react";
import { useState } from "react";
import Light from "./Light";

export default function TraficLight({ config, lights, layout = "vertical" }) {
  const [cur, setCur] = useState("red");
  const [isActive, setIsActive] = useState(false);
  const [curTime, setCurTime] = useState(5);
  useEffect(
    function () {
      let id;
      id = setInterval(() => {
        if (isActive) setCurTime((time) => (time > 0 ? time - 1 : 0));
        if (isActive && curTime === 0) {
          setCur(config[cur].next);
          let next = config[cur].next;
          setCurTime(config[next].time);
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [isActive, cur, curTime]
  );
  return (
    <div class="container">
      <div
        className="light-container"
        style={{ flexDirection: layout === "vertical" ? "column" : "row" }}
      >
        {lights.map((lightColor) => {
          return (
            <Light
              key={lightColor}
              lightColor={lightColor}
              curColor={config[cur].color}
            />
          );
        })}
      </div>
      <h1 className="counter" style={{ color: config[cur].color }}>
        {curTime}
      </h1>
      <button
        style={{ backgroundColor: `${isActive ? "#f44336" : "#04aa6d"}` }}
        onClick={() => setIsActive((state) => !state)}
      >
        {isActive ? "Stop" : "Start"}
      </button>
    </div>
  );
}
