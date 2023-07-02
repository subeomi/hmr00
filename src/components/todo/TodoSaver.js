const TodoSaver = ({saveAll}) => {
    return ( 
        <div className="w-full bg-blue-500 text-white text-center text-4xl">
            <button
            onClick={saveAll}
            >save ALL</button>
        </div>
     );
}
 
export default TodoSaver;