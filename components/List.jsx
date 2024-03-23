import React from "react";
import { useState } from "react";

function List({ todos, setTodos }) {

  const handleClick = ( todo1 ) => {
    setTodos(

      todos.map((item) => {

        if (item.id === todo1.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })

    )
    
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p onChange={(event) => event.preventDefault()} onClick={() => handleClick(todo)}>{todo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
