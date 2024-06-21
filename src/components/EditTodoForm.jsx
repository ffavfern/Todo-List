import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EditTodoForm({ todo, index, onUpdateTodo }) {
  const [editingTodo, setEditingTodo] = useState(todo.text);
  const [editingPriority, setEditingPriority] = useState(todo.priority);
  const [editingCategory, setEditingCategory] = useState(todo.category);
  const [editingDueDate, setEditingDueDate] = useState(new Date(todo.dueDate));

  const handleUpdateTodo = () => {
    if (editingTodo.trim() !== '') {
      onUpdateTodo(
        {
          text: editingTodo,
          priority: editingPriority,
          category: editingCategory,
          dueDate: editingDueDate,
          completed: todo.completed,
        },
        index
      );
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Edit Todo</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="input input-bordered flex-1"
          value={editingTodo}
          onChange={(e) => setEditingTodo(e.target.value)}
        />
        <select
          className="select select-bordered ml-2"
          value={editingPriority}
          onChange={(e) => setEditingPriority(e.target.value)}
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
          value={editingCategory}
          onChange={(e) => setEditingCategory(e.target.value)}
        />
      </div>
      <div className="flex mb-4">
        <DatePicker
          selected={editingDueDate}
          onChange={(date) => setEditingDueDate(date)}
          className="input input-bordered flex-1"
        />
      </div>
      <button className="btn btn-primary mb-4 w-full" onClick={handleUpdateTodo}>
        Update
      </button>
    </div>
  );
}

export default EditTodoForm;
