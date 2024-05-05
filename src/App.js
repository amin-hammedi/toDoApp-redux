import logo from "./logo.svg";
import "./App.css";
import AddNewtask from "./Components/AddNewtask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <AddNewtask />
      <TaskList />
    </div>
  );
}

export default App;
