import React, { useState } from 'react';

const TodoList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (taskName.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), name: taskName, priority, completed: false },
    ]);
    setTaskName('');
    setPriority('Moyenne');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List avec Priorités</h1>
   

      <div>
        <h3 className="text-lg font-semibold mb-2">Tâches :</h3>
        {filteredTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-2 border rounded-lg shadow-md bg-gray">
            <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}> 
              {task.name} - <span className="italic">{task.priority}</span>
            </span>
         
              <button
                onClick={() => toggleComplete(task.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                style={{ backgroundColor: 'blue', color: 'white' }}
              >
                {task.completed ? 'Non Terminé' : 'Terminé'}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                style={{ backgroundColor: 'blue', color: 'white' }}
              >
                Supprimer
              </button>
          
          </div>
        ))}
        <div className="mt-4" >
          <p>Total des tâches : {tasks.length}</p>
          <p>Tâches terminées : {tasks.filter(task => task.completed).length}</p>
        </div>
        <div className="mb-4">
      <input
          type="text"
          placeholder="Rechercher une tâche"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
      </div>
      <div className="mb-4">
      
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          style={{ backgroundColor: '#d3d3d3', color: 'black' }}
          >
        
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button
          onClick={addTask}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Ajouter
        </button>
      </div>
      </div>
    </div>
  );
};

export default TodoList;
