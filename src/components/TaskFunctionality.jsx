import React, { useState } from 'react';
import TaskPrint from './TaskPrint';

const TaskFunctionality = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title, isCompleted: false }]);
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'uncompleted') return !task.isCompleted;
    return true;
  });

  console.log(filteredTasks);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border rounded shadow-lg">
      <div className="mb-4">
        <label className="text-lg font-bold">
          Filter:
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="ml-2 p-2 border rounded"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <TaskPrint
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add New Task"
          onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)}
          className="p-2 border border-[1px] rounded"
        />
      </div>
    </div>
  );
};

export default TaskFunctionality;
