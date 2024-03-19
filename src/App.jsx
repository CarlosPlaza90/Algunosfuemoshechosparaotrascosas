import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import List from '../components/List'

function App() {
  const [data, setData] = useState('');

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <>
      <h1>To Do by Carlos Plaza</h1>
      <h2>Please insert a task:</h2>
      <Header updateData={updateData}/>
      <List data={data} />

    </>

  );
}

export default App
