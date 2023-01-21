import "./styles/global.css";
import { Habit } from "./components/Habit/Habit";

function App() {
  return (
    <div>
      <Habit completed={3}></Habit>
      <Habit completed={20}></Habit>
    </div>
  );
}

export default App;
