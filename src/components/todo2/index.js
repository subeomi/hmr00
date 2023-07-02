import { useEffect, useState } from "react";
import Todo2Read from "./Todo2Read";
import Todo2Input from "./Todo2Input";
import Todo2List from "./Todo2List";
import uuid from "react-uuid";

const Todo2 = () => {

    const [stat, setStat] = useState(false)
    const [todos, setTodos] = useState([])
    const [current, setCurrent] = useState(null)

    const addTodo = (todo) => {
        setTodos([...todos, {tno:uuid(), ...todo}])
        console.log(todos)
    }

    const viewTodo = (tno) => {
        const target = todos.filter(t => t.tno === tno)[0]

        console.log("viewTodo >> ", target)

        setStat(true)

        setCurrent(target)
    }

    const delTodo = (tno) => {
        setTodos( todos.filter(t => t.tno !== tno) )
        console.log("del >>> ", tno)

        setCurrent(null)
        setStat(false)
    }

    const cancelTodo = () => {
        setStat(false)
    }

    const modTodo = (todo) => {
        const target = todos.filter(t => t.tno === todo.tno)[0]

        target.title = todo.title
        console.log("mod >>> ")

        setTodos([...todos])

        setStat(false)
    }

    const saveAll = () => {
        const str = JSON.stringify(todos)
        localStorage.setItem("todos", str)
    }

    useEffect(() => {
        const jsonStr = localStorage.getItem("todos")

        if(jsonStr) {
            setTodos(JSON.parse(jsonStr))
        }
    }, [])

    return ( 
        <>
        {stat ? <Todo2Read modTodo={modTodo} current={current} delTodo={delTodo} cancelTodo={cancelTodo}/> : <Todo2Input addTodo={addTodo} />}
        <Todo2List saveAll={saveAll} todos={todos} viewTodo={viewTodo}></Todo2List>
        </>
     );
}
 
export default Todo2;