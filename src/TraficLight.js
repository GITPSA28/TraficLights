import Light from "./Light";
import Counter from "./Counter";
import Button from "./Button";
import useTrafficLights from "./hooks/useTrafficLights";

export default function TraficLight({ config, lights, layout = "vertical" }) {
  const { curColor, curTime, isActive, toggleActive, nextLight } =
    useTrafficLights({ config });
  return (
    <div className="container">
      <LightContainer lights={lights} layout={layout} curColor={curColor} />
      <Counter color={curColor} time={curTime} />
      <Controls
        isActive={isActive}
        nextLight={nextLight}
        toggleActive={toggleActive}
      />
    </div>
  );
}

function LightContainer({ lights, layout, curColor }) {
  return (
    <div
      className="light-container"
      style={{ flexDirection: layout === "vertical" ? "column" : "row" }}
    >
      {lights.map((lightColor) => {
        return (
          <Light key={lightColor} lightColor={lightColor} curColor={curColor} />
        );
      })}
    </div>
  );
}
function Controls({ isActive, toggleActive, nextLight }) {
  return (
    <div className="controls">
      <Button
        color={`${isActive ? "#f44336" : "#04aa6d"}`}
        onClick={toggleActive}
      >
        {isActive ? "Stop" : "Start"}
      </Button>
      <Button onClick={nextLight}>Next</Button>
    </div>
  );
}
