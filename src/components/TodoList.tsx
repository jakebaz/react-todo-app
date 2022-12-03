import React, { SetStateAction, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { TodoType } from '../Types';

function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos] as SetStateAction<TodoType[]>;
    setTodos(newTodos);
    console.log(todos);
  };

  const completeTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id: string) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1>Whats the plan for today...</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
