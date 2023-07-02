const Todo2List = ({todos, viewTodo, saveAll}) => {
    return ( 
        <div className="m-3 p-3 bg-green-50 text-xl">
            <div>Todo2 List
                <button
                className="m-3 p-3 bg-pink-400 text-white"
                onClick={saveAll}
                >saveAll</button>
            </div>
            <ul>
                {todos.map(t => 
                    <li 
                    key={t.tno}
                    onClick={() => {viewTodo(t.tno)}}
                    >{t.tno} - {t.title}</li>
                )}
            </ul>
        </div>
     );
}
 
export default Todo2List;