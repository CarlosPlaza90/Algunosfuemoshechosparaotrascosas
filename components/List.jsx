import React from "react";
import { useState } from "react";

function List({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
