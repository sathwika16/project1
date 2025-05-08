import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post('http://localhost:5000/api/tasks', {
      title, priority: 'Medium'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTasks([...tasks, res.data]));
  };

  return (
    <div>
      <input placeholder="New task" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.title} [{t.priority}] {t.completed ? '✔' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
