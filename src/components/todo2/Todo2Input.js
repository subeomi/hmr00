import { useState } from "react";

const Todo2Input = ({addTodo}) => {

    const [todo, setTodo] = useState({title:''})

    return ( 
        <div className="m-3 p-3 bg-pink-50 text-xl">
            <div>Todo2 Input</div>
            <input
            className="m-3 p-3"
            type="text"
            name="title"
            value={todo.title}
            onChange={(e) => {
                todo.title = e.target.value
                setTodo({...todo})
            }}
            />
            <button
            className="m-3 p-3 bg-green-300"
            onClick={() => {
                addTodo(todo)
                setTodo({title:''})
            }}
            >
                ADD
            </button>
        </div>
     );
}
 
export default Todo2Input;