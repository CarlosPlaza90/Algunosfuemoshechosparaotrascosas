import { useState } from "react";

import "./App.css";
import Header from "../components/Header";
import List from "../components/List";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  return (
    <>
      <h1>To Do by Carlos Plaza</h1>
      <h2>Please insert a task:</h2>
      <Header
        todos={todos}
        id={id}
        setId={setId}
        input={input}
        setInput={setInput}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
