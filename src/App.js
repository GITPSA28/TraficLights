import "./styles.css";
import TraficLight from "./TraficLight";

const config = {
  red: {
    color: "red",
    time: 5,
    next: "yellow",
  },
  yellow: {
    color: "yellow",
    time: 3,
    next: "green",
  },
  green: {
    color: "limegreen",
    time: 5,
    next: "orange",
  },
  orange: {
    color: "orange",
    time: 3,
    next: "red",
  },
};
const config2 = {
  red: {
    color: "red",
    time: 5,
    next: "yellow",
  },
  yellow: {
    color: "yellow",
    time: 3,
    next: "green",
  },
  green: {
    color: "limegreen",
    time: 5,
    next: "yellow2",
  },
  yellow2: {
    color: "yellow",
    time: 3,
    next: "red",
  },
};
const lights = ["red", "yellow", "orange", "limegreen"];
const lights2 = ["red", "yellow", "limegreen"];
export default function App() {
  return (
    <div className="App">
      <TraficLight config={config} lights={lights} />
      <TraficLight config={config2} lights={lights2} layout="horizontal" />
    </div>
  );
}
