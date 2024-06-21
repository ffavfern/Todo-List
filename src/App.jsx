import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdateTodo = (updatedTodo, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteTodo = (index) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onEditTodo={handleEditTodo}
          onDeleteTodo={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
        {editingIndex !== null && (
          <EditTodoForm
            todo={todos[editingIndex]}
            index={editingIndex}
            onUpdateTodo={handleUpdateTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
