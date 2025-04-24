import Button from "./Button";
import Counter from "./Counter";
import Light from "./Light";
import useF1Config from "./hooks/useF1Config";
import useTrafficLights from "./hooks/useTrafficLights";

export default function F1Start() {
  const { config, lights, resetStartTime } = useF1Config({
    min: 2000,
    max: 5000,
  });
  const { curLightId, cur, curTime, isActive, toggleActive, nextLight } =
    useTrafficLights({
      config,
      startLight: "red1",
      timeUnit: 1000,
      interval: 1000,
    });

  return (
    <div className="container">
      <LightContainer
        lights={lights}
        layout={"horizontal"}
        curLightId={curLightId}
      />
      <Counter
        color={lights.find((l) => l.id === curLightId).color}
        time={curTime}
      />
      <Controls
        isActive={isActive}
        nextLight={nextLight}
        nextEnabled={config[cur].next ? true : false}
        toggleActive={toggleActive}
      />
    </div>
  );
}
function LightContainer({ lights, layout, curLightId }) {
  return (
    <div
      className="light-container"
      style={{ flexDirection: layout === "vertical" ? "column" : "row" }}
    >
      {lights.map((light) => {
        return (
          <Light
            key={light.id}
            lightColor={light.color}
            active={light.id === curLightId}
          />
        );
      })}
    </div>
  );
}
function Controls({ isActive, toggleActive, nextLight, nextEnabled }) {
  return (
    <div className="controls">
      <Button
        color={`${isActive ? "#f44336" : "#04aa6d"}`}
        onClick={toggleActive}
      >
        {isActive ? "Stop" : "Start"}
      </Button>
      {nextEnabled && <Button onClick={nextLight}>Next</Button>}
    </div>
  );
}
