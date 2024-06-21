import TodoItem from './TodoItem';

function TodoList({ todos, onEditTodo, onDeleteTodo, onToggleComplete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
