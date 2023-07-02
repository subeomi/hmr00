import { useEffect, useState } from "react";

const Todo2Read = ({current, delTodo, cancelTodo, modTodo}) => {

    const [todo, setTodo] = useState(current)

    useEffect(() => {

        setTodo(current)

    }, [current])

    if(!todo) {
        return <>NOT Available</>
    }

    return ( 
        <div className="m-3 p-3 bg-red-50 text-xl">
            <div>Todo2 Read</div>
            <div>{todo.tno}</div>

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
            className="m-3 p-3 bg-blue-400 text-white text-xl"
            onClick={() => {modTodo(todo)}}
            >MOD</button>

            <button
            className="m-3 p-3 bg-red-400 text-white text-xl"
            onClick={() => {delTodo(todo.tno)}}
            >DEL</button>

            <button
            className="m-3 p-3 bg-gray-600 text-white text-xl"
            onClick={cancelTodo}
            >CANCEL</button>
        </div>
     );
}
 
export default Todo2Read;