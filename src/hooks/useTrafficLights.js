import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function ({
  config,
  startLight,
  timeUnit = 1,
  interval = 1000,
}) {
  const [cur, setCur] = useState(startLight);
  const [isActive, setIsActive] = useState(false);
  const [curTime, setCurTime] = useState(() => config[startLight].time);
  const curTimeStamp = useRef(null);
  function toggleActive() {
    setIsActive((state) => !state);
  }
  function nextLight() {
    if (!config[cur].next) return;
    setCur(config[cur].next);
    let next = config[cur].next;
    setCurTime(config[next].time);
  }
  useEffect(
    function () {
      // let id;
      curTimeStamp.current = setInterval(() => {
        if (isActive) setCurTime((time) => (time > 0 ? time - timeUnit : 0));
        if (isActive && curTime === 0) {
          nextLight();
        }
      }, interval);
      return () => {
        clearInterval(curTimeStamp.current);
      };
    },
    [isActive, cur, curTime]
  );
  return {
    curLightId: config[cur].lightId,
    cur,
    curTime,
    isActive,
    nextLight,
    toggleActive,
  };
}
