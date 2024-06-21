import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      onAddTodo({ text: newTodo, priority, category, dueDate, completed: false });
      setNewTodo('');
      setPriority('low');
      setCategory('');
      setDueDate(new Date());
    }
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          className="input input-bordered flex-1"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select
          className="select select-bordered ml-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          className="input input-bordered flex-1"
          placeholder="Enter category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="flex mb-4">
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          className="input input-bordered flex-1"
        />
      </div>
      <button className="btn btn-primary mb-4 w-full" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
