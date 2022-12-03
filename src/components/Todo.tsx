import React, { useState } from 'react';
import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TodoType } from '../Types';

type todoProps = {
  todos: TodoType[];
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

function Todo(props: todoProps) {
  const [edit, setEdit] = useState<TodoType>({
    id: null,
    text: '',
  });
  return (
    <>
      {props.todos.map((todo: TodoType, index: number) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div
            key={todo.id}
            onClick={() => props.completeTodo(todo.id as string)}
          >
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => props.removeTodo(todo.id as string)}
            />
            <TiEdit onClick={() => setEdit({ id: todo.id, text: todo.text })} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Todo;
