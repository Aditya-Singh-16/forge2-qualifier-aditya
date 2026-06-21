import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8001/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(API, {
      title,
      status: "todo",
    });

    setTitle("");
    loadTasks();
  };

  const moveTask = async (task, status) => {
    await axios.put(API + "/" + task.id, {
      title: task.title,
      description: task.description,
      status,
    });

    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(API + "/" + id);
    loadTasks();
  };

  const renderColumn = (status, heading) => {
    return (
      <div className="column">
        <h2>{heading}</h2>

        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <div key={task.id} className="card">
              <p>{task.title}</p>

              <div className="buttons">
                {status !== "todo" && (
                  <button onClick={() => moveTask(task, "todo")}>
                    To Do
                  </button>
                )}

                {status !== "in_progress" && (
                  <button onClick={() => moveTask(task, "in_progress")}>
                    Progress
                  </button>
                )}

                {status !== "done" && (
                  <button onClick={() => moveTask(task, "done")}>
                    Done
                  </button>
                )}

                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>

      <div className="new-task">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="board">
        {renderColumn("todo", "To Do")}
        {renderColumn("in_progress", "In Progress")}
        {renderColumn("done", "Done")}
      </div>
    </div>
  );
}

export default App;
