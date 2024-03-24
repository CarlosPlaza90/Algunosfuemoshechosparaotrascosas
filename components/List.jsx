import React from "react";
import { useState } from "react";

function List({ todos, setTodos }) {

  const handleCompleted = (todo1) => {
    setTodos(

      todos.map((item) => {

        if (item.id === todo1.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })

    )

  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div>
            <li key={todo.id}>
              <p className={todo.completed ? "strikethrough" : ""} onChange={(event) => event.preventDefault()} onClick={() => handleCompleted(todo)}>{todo.title}</p>
            </li>
            
          </div>


        ))}
      </ul>
    </div>
  );
}

export default List;
