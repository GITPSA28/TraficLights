import F1Start from "./F1Start";
import "./styles.css";
import TraficLight from "./TraficLight";

const config = {
  red1: {
    lightId: "red1",
    time: 2,
    next: "red2",
  },
  red2: {
    lightId: "red2",
    time: 2,
    next: "red3",
  },
  red3: {
    lightId: "red3",
    time: 2,
    next: "green4",
  },
  green4: {
    lightId: "green",
    time: 5,
    // next: "yellow4",
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
export default function App() {
  return (
    <div className="App">
      <TraficLight config={config} startLight={"red1"} lights={lights} />
      {/* <TraficLight config={config2} lights={lights2} layout="horizontal" /> */}
      <F1Start />
    </div>
  );
}
