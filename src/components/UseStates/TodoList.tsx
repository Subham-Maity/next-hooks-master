import React, { useState } from "react";

type Task = {
  id: number;
  text: string;
};

type TodoListProps = {};

function TodoList(props: TodoListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [input, setInput] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInput(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (input) {
      const newTask: Task = { id: Date.now(), text: input };

      setTasks([...tasks, newTask]);

      setInput("");
    }
  }

  function handleRemove(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <div>
      <h1 className="text-2xl">Todo List</h1>
      <form className="text-sky-500 p-1" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button className="font-bold pl-2" type="submit">
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemove(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
