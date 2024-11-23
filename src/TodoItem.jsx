export function TodoItem({completed, id, title, toggleTodo}) {
  return(
  <li key={todo.id}>
        <label>
        <input type="checkbox" checked={todo.completed} //onChange={e => toggleTodo(todo.id, e.target.checked )}
        />

        {todo.title}
        </label>
        <button //</li>onClick={()=>{deleteTodo(todo.id)}}
         className="btn btn-danger">Delete</button>
      </li>
  )
}