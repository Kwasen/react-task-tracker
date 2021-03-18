import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { SERVER_URL } from "./const";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(`${SERVER_URL}/tasks`);
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`${SERVER_URL}/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  const deleteTask = async (id) => {
    const res = await fetch(`${SERVER_URL}/tasks/${id}`, { method: 'DELETE' });
    res.status === 200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert('Error Deleting This Task')
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`${SERVER_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();
    setTasks(tasks.map((_task) => _task.id === id ? { ..._task, reminder: data.reminder } : _task));
  };

  const addTask = async (taskToAdd) => {
    const res = await fetch(`${SERVER_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(taskToAdd)
    })
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} title="Hello there" showAdd={showAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            {
              showAddTask &&
              <AddTask onAddTask={addTask} />
            }
            {
              tasks.length > 0 ?
                (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
                : (<p>No Task to show</p>)
            }
          </>
        )}></Route>
        <Route path='/about' component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
