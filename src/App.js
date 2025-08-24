import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [progressBars, setProgressBars] = useState([])

  const handleAddProgressBar = () => {
    setProgressBars([...progressBars, { id: crypto.randomUUID() }])
  }

  return (
    <div className="App">
      <div className="btn">
        <button onClick={handleAddProgressBar}>Add Progress Bar</button>
      </div>
      <div className="bars">{
        progressBars.map(({ id }) => <ProgressBar id={id} />)}</div>
    </div>
  );
}
