import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import List from '../components/List'

function App() {

  return (
    <>
    <h1>To Do by Carlos Plaza</h1>
    <h2>Please insert a task:</h2>
    <Header/>
    <List text={Header.text}/>
    
    </>
    
  );
}

export default App
