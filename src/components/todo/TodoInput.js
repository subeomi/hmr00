import { useState } from "react";

const TodoInput = ({addTodo}) => {

    const [todo, setTodo] = useState({title:''})

    return ( 
        <div className="w-full bg-green-50-50 m-3 p-3">
            <div>Todo Input</div>
            <input
            className="bg-blue-200 m-3 p-3"
            type="text"
            name="title"
            value={todo.title}
            onChange={(e) => {
                todo.title = e.target.value
                setTodo({...todo})
            }}
            />
            <button
            className="bg-blue-200 ml-3 p-3 border-2"
            onClick={() => {
                addTodo(todo)
                console.log(todo)
                // setTodo({title:''})
            }}
            >
                ADD Todo
            </button>
        </div>
     );
}
 
export default TodoInput;