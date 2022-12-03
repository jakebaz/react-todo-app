import React, { SetStateAction, useState } from 'react';
import TodoForm from './TodoForm';
import { Todo } from '../Types';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: Todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos] as SetStateAction<never[]>;
    setTodos(newTodos);
  };

  const handleSubmit = (todo: Todo) => console.log(todo);

  return (
    <div>
      <h1>Whats the plan for today...</h1>
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
}

export default TodoList;
