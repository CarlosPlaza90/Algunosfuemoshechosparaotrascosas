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

  const handleDelete = (todos) => {

    setTodos(

      todos.map((item) => {
        if (item.id === todos.id){
          
        }
      })

    )

  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div className="Item">
            <li key={todo.id}>
              <p className={todo.completed ? "strikethrough" : ""} onChange={(event) => event.preventDefault()} onClick={() => handleCompleted(todo)}>{todo.title}</p>
            </li>
            <button onClick={handleDelete}>Delete</button>
            
          </div>


        ))}
      </ul>
    </div>
  );
}

export default List;
