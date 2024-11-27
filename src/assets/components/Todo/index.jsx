import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const clearTodo = (indexToClear) => {
    setTodos(todos.filter((_, index) => index !== indexToClear));
  };

  return (
    <div>
      <h4>vazifalar ro'yxati:</h4>
      <input
        type="text"
        placeholder="vazifa kiriting"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => clearTodo(index)}>CLEAR</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
