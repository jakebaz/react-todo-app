import React, { useState } from 'react';
import { ulid } from 'ulid';

type Todo = {
  id: string;
  text: string;
};

type TodoFormProps = {
  onSubmit: (todo: Todo) => void;
};

function TodoForm(props: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  };

  const handleSave = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    props.onSubmit({
      id: ulid(),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="add-todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
