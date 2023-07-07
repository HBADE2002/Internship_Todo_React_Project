import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []; //initialState is equal to JSON.parse(localStorage.getItem("todos")) or empty array
  const [input, setInput] = useState(""); //input is equal to empty string
  const [todos, setTodos] = useState(initialState); //todos is equal to initialState
  const [editTodo, setEditTodo] = useState(null); //editTodo is equal to null

  useEffect(() => { //useEffect hook to save todos to localStorage whenever todos changes
    localStorage.setItem("todos", JSON.stringify(todos)); //localStorage setItem todos and JSON.stringify(todos) 
  }, [todos]); //dependency array is todos so whenever todos changes, useEffect will run
  
  return (
    <div className="container">
      <div className='app-wrapper'> {/* className is equal to app-wrapper */}
        <div>
          <Header></Header> {/* Header component */}
        </div>
       
        <div>
          <Form input={input}    
            setInput={setInput} 
            todos={todos}
            setTodos={setTodos} 
            editTodo={editTodo}
            setEditTodo={setEditTodo}/> {/* Form component */}
        </div>
         <div>
          <TodoList todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo} /> {/* TodoList component */}
        </div>
        
      </div>
    </div>
  );
}

export default App;