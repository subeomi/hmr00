const TodoList = ({todos, viewTodo}) => {
    return ( 
        <div>
            <div>Todo List</div>
            <ul>
                {todos.map( t => 
                    <li key={t.tno}
                    onClick={() => viewTodo(t.tno)}
                    >{t.tno} - {t.title}</li>
                )}
            </ul>
        </div>
     );
}
 
export default TodoList;