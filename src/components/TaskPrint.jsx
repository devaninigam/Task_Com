import React, { useState } from 'react';

const TaskPrint = ({ task, onEdit, onDelete, onToggle }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (newTitle !== '') {
      onEdit(task.id, newTitle);
      setEditing(false);
    }
  };

  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
        className="mr-2"
      />
      {editing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          className="border rounded p-1"
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          className={`cursor-pointer ${task.isCompleted ? 'line-through text-gray-500' : ''}`}
        >
          {task.title}
        </span>
      )}
      <button
        onClick={() => onDelete(task.id)}
        className="ml-2 p-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskPrint;
