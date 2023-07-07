import React,{useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'; //import uuidv4 from uuid  

const Form = ({input, setInput, todos, setTodos, editTodo,setEditTodo}) => { //Form component with props input, setInput, todos, setTodos, editTodo, setEditTodo

  const updateTodo = (title, id, completed) => { //updateTodo function with parameters title, id, completed
    const newTodo = todos.map((todo) => //newTodo is equal to todos.map with parameter todo 
      todo.id === id ? { title, id, completed } : todo   //if todo.id is equal to id, return {title, id, completed} else return todo
    );
    setTodos(newTodo); //setTodos to newTodo
    setEditTodo (""); //setEditTodo to empty string
  };

  useEffect(() => { //useEffect hook to set input to editTodo.title if editTodo is true else set input to empty string
    if(editTodo){ 
      setInput(editTodo.title); 
    }else{
      setInput("");
    }
  }, [setInput, editTodo]); //dependency array is setInput and editTodo so whenever setInput or editTodo changes, useEffect will run


  const onInputChange = (event) => {
    setInput(event.target.value);

  }; //onInputChange function with parameter event

  const onFormSubmit = (event) => { //onFormSubmit function with parameter event
    
    event.preventDefault(); //prevent default behavior of form
    if(!editTodo){ //if editTodo is false
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}]); //setTodos to todos spread operator with id: uuidv4(), title: input, completed: false
    setInput(""); //setInput to empty string
    }else{ 
    
      updateTodo(input, editTodo.id,editTodo.completed) //call updateTodo function with parameters input, editTodo.id, editTodo.completed
    };
  }

  return (
    <form onSubmit={onFormSubmit} > {/* form with onSubmit event handler onFormSubmit */}
        <input type="text" 
        placeholder='Enter a Task' 
        className='task-input'
        value = {input}
        required
        onChange={onInputChange} /> {/* input with type text, placeholder Enter a Task, className task-input, value is equal to input, required, onChange event handler onInputChange */}
        <button className='button-add' type='submit'> {/* button with className button-add, type submit */}
          {editTodo ? "OK" : "Add"} {/* if editTodo is true, button text is OK else button text is Add */}
        </button>
    </form>
  )
}

export default Form