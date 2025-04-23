import { useEffect } from "react";
import { useState } from "react";
export default function ({ config }) {
  const [cur, setCur] = useState("red");
  const [isActive, setIsActive] = useState(false);
  const [curTime, setCurTime] = useState(5);

  function toggleActive() {
    setIsActive((state) => !state);
  }
  function nextLight() {
    setCur(config[cur].next);
    let next = config[cur].next;
    setCurTime(config[next].time);
  }
  useEffect(
    function () {
      let id;
      id = setInterval(() => {
        if (isActive) setCurTime((time) => (time > 0 ? time - 1 : 0));
        if (isActive && curTime === 0) {
          nextLight();
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [isActive, cur, curTime]
  );
  return {
    curColor: config[cur].color,
    curTime,
    isActive,
    nextLight,
    toggleActive,
  };
}
