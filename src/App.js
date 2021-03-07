import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Work out',
      day: '01/01/2001',
      reminder: true
    },
    {
      id: '2',
      text: 'Water flowers',
      day: '02/02/2001',
      reminder: false
    },
    {
      id: '3',
      text: 'Read a book',
      day: '03/01/2001',
      reminder: true,
    }
  ]);

  const deleteTask = (id) => {
    console.log('deleteTask - id:: ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log('toggleReminder - id::', id);
    setTasks(tasks.map((_task) => _task.id === id ? {..._task, reminder: !_task.reminder} : _task ));
  };

  const addTask = (taskToAdd) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log({taskToAdd});
    setTasks([...tasks, {id, ...taskToAdd}]);
  };

  return (
    <div className="container">
      <Header title="Hello there" />
      <AddTask onAddTask={addTask} />
      {
        tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
          : (<p>No Task to show</p>)
      }
    </div>
  );
}

export default App;
