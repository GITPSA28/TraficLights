import { useEffect } from "react";
import { useState } from "react";
const config = {
  red1: {
    lightId: "red1",
    time: 2000,
    next: "red2",
  },
  red2: {
    lightId: "red2",
    time: 2000,
    next: "red3",
  },
  red3: {
    lightId: "red3",
    time: 2000,
    next: "green4",
  },
  green4: {
    lightId: "green",
    time: 5000,
    next: "red1",
  },
};
const lights = [
  {
    id: "red1",
    color: "red",
  },
  {
    id: "red2",
    color: "red",
  },
  {
    id: "red3",
    color: "red",
  },
  {
    id: "green",
    color: "limegreen",
  },
];
const startId = "red3";
export default function useF1Config({ min, max }) {
  const [startTime, setStartTime] = useState(() => {
    let randomTime = Math.floor(Math.random() * (max - min)) + min;
    return randomTime;
  });
  const [curConfig, setCurConfig] = useState(config);
  useEffect(
    function () {
      setCurConfig((curConfig) => {
        return {
          ...curConfig,
          [startId]: { ...curConfig[startId], time: startTime },
        };
      });
    },
    [startTime]
  );
  function resetStartTime(time) {
    if (time) setStartTime(time);
    else {
      let randomTime = Math.floor(Math.random() * (max - min)) + min;
      setStartTime(randomTime);
    }
  }
  return { config: curConfig, lights, resetStartTime };
}
