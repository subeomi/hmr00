import { useEffect, useState } from "react";

const TodoRead = ({current, delTodo, modTodo}) => {

    const [todo, setTodo] = useState(current)

    useEffect(() => {

        setTodo(current)

    }, [current])

    if(!todo) {
        return <>NOT Available</>
    }

    return ( 
        <div className="bg-red-50 w-full">
            <div>Todo Read</div>
                <div className="p-3"> {todo.tno} </div>
                <div className="p-3">
                    <input 
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={(e) => {
                        todo.title = e.target.value
                        setTodo({...todo})
                    }}
                    />
                <button 
                className="m-3 p-3 bg-blue-400 text-white"
                onClick={() => modTodo(todo)}
                >MOD</button>

                <button 
                className="ml-3 p-3 bg-red-400 text-white"
                onClick={() => delTodo(todo.tno)}
                >DEL</button>
            </div>
        </div>
     );
}
 
export default TodoRead;