function TodoItem({ todo, index, onEditTodo, onDeleteTodo, onToggleComplete }) {
  return (
    <li className={`flex justify-between items-center py-2 ${todo.completed ? 'line-through' : ''}`}>
      <span className={`priority-${todo.priority}`}>
        {todo.text} - {todo.category} - {new Date(todo.dueDate).toLocaleDateString()}
      </span>
      <div>
        <button
          className="btn btn-outline btn-square mr-2"
          onClick={() => onToggleComplete(index)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="btn btn-outline btn-square mr-2" onClick={() => onEditTodo(index)}>
          Edit
        </button>
        <button className="btn btn-outline btn-square" onClick={() => onDeleteTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
