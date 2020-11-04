import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from './components/Tasks';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    let task = {
      title: input,
      isCompleted: false
    }
    setTasks([...tasks, task]);
    setInput("");
  }

  const handleToggleCheck = (e, idx) => {
    let task = tasks[idx];
    task.isCompleted = !task.isCompleted;
    setTasks([...tasks.slice(0,idx),task,...tasks.slice(idx+1)]);
  }

  const handleDestroyTask = (e, idx) => {
    setTasks([...tasks.slice(0,idx),...tasks.slice(idx+1)])
  }

  return (
    <div className="App">
      <form onSubmit={handleAddTask} className="mx-auto col-4 bg-dark text-warning p-4">
        <div className="form-group">
          <input type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            />
        </div>
      <input type="submit" value="Add" className="btn btn-warning btn-outline-dark"/>
      </form>
      <div className="d-flex flex-column col-6 mx-auto">
        {
          tasks.map((task, i) => {
            return <Tasks 
                      idx={i}
                      handleToggleCheck={handleToggleCheck}
                      task={task}
                      key={i}
                      handleDestroyTask={handleDestroyTask}
                    />
          })
        }
      </div>
    </div>
  );
}

export default App;
