import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoRead from "./TodoRead";
import TodoSaver from "./TodoSaver";

let tno = 1

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [current, setCurrent] = useState(null)

    const addTodo = (todo) => {
        
        setTodos([...todos, {tno:tno, ...todo}])
        tno++
    }

    const viewTodo = (tno) => {
        const target = todos.filter(todo => todo.tno === tno)[0]

        console.log("view", target)
        setCurrent(target)
    }

    const delTodo = (tno) => {
        setTodos( todos.filter(todo => todo.tno !== tno) )
        setCurrent(null)
    }

    const modTodo = (modifiedTodo) => {
        const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]

        target.title = modifiedTodo.title

        setTodos([...todos])

        setCurrent(null)
    }

    useEffect(() => {
        // localStorage에 저장된 key:todos의 value을 가져옴
        const jsonStr = localStorage.getItem("todos")

        // 값이 존재한다면 value 내용을 todos 안에 넣음
        if(jsonStr){
            setTodos(JSON.parse(jsonStr))
        }

    }, [])

    const saveAll = (todo) => {
        // JSON.stringify는 JS의 객체나 배열을 JSON 형태로 바꿔준다.
        const str = JSON.stringify(todos)

        // localStorage -> 브라우저의 로컬스토리지에 데이터를 저장함.
        // localStorage.setItem(key,value) 저장, localStorage.getItem(key) 키의 값을 가져옴
        localStorage.setItem("todos", str)
    }
    

    return ( 
        <div>
        <TodoInput addTodo={addTodo}></TodoInput>
        <TodoRead current={current} delTodo={delTodo} modTodo={modTodo}></TodoRead>
        <TodoList viewTodo={viewTodo} todos={todos}></TodoList>
        <TodoSaver saveAll={saveAll}></TodoSaver>
        </div>
     );
}
 
export default Todo;