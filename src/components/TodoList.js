import React from 'react'



const TodoList = ({ todos, setTodos, setEditTodo }) => { //destructuring props

    const handleComplete = (todo) => { //destructuring todo
        setTodos(
            todos.map((item) => { //destructuring item
                if (item.id === todo.id) { //if item.id is equal to todo.id
                    return { ...item, completed: !item.completed }; //return item and completed is equal to !item.completed
                }
                return item; //return item
            })
        );
    }


    const handleDelete = ({ id }) => { //destructuring id
        setTodos(todos.filter((todo) => todo.id !== id));   //setTodos to filter todos and return todo.id is not equal to id
    }

    const handleEdit = ({ id }) => { //destructuring id
        const findTodo = todos.find((todo) => todo.id === id); //find todo.id is equal to id
        setEditTodo(findTodo); //setEditTodo to findTodo
    }
    return (
        <div>
            {todos.map((todo) => ( //map todos
                <li className='list-item' key={todo.id}> {/* key is equal to todo.id */}
                    <input
                        type='text' //type is equal to text
                        value={todo.title} //value is equal to todo.title
                        className={`list ${todo.completed ? "complete" : ""}`} //className is equal to list and if todo.completed is true then complete else empty string
                        onChange={(event) => event.preventDefault()} /> {/* onChange is equal to event.preventDefault() */}

                    {todo.completed ? ( //if todo.completed is true
                        <button className='button-incomplete task-button' onClick={() => handleComplete(todo)}> {/* if todo.completed is true then button is button-incomplete else button-complete */}
                            <i className='fa fa-check-circle'></i> {/* if todo.completed is true then i is fa fa-check-circle else empty string */}
                        </button>
                    ) : (
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}> {/* if todo.completed is true then button is button-complete else button-incomplete */}
                            <i className='fa fa-check-circle'></i> {/* if todo.completed is true then i is fa fa-check-circle else empty string */}
                        </button>
                    )}

                    {todo.completed ? ( //if todo.completed is true
                        <button className='button-inactive task-button' onClick={() => handleEdit(todo)} disabled> {/* if todo.completed is true then button is button-inactive else button-edit */}
                            <i className='fa fa-edit'></i> {/* if todo.completed is true then i is fa fa-edit else empty string */}
                        </button>
                    ) : (
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}> {/* if todo.completed is true then button is button-edit else button-inactive */}
                            <i className='fa fa-edit'></i> {/* if todo.completed is true then i is fa fa-edit else empty string */}
                        </button>
                    )}

                    <button className='button-delete task-button' onClick={() => handleDelete(todo)}> {/* if todo.completed is true then button is button-delete else button-inactive */}
                        <i className='fa fa-trash'></i> {/* if todo.completed is true then i is fa fa-trash else empty string */}
                    </button>
                </li>



            ))}

        </div>
    )
}

export default TodoList