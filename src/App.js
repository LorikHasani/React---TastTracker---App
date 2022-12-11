import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Lorik Hasani",
      day: "7 Feb",
      reminder: true,
    },
    {
      id: 2,
      text: "Hasani Lorik",
      day: "7 Aprill",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to show'}
    </div>
  );
};

export default App;
