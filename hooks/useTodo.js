
import {useReducer,useEffect} from 'react'
import { todoReducer } from "../useReducer/todoReducer";

export const useTodo = (initialState) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
      }
   
  const [todos, dispatch] = useReducer(todoReducer, initialState,init);

  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos]);

  const handleNewTodo = (todo) =>{
     
    const action = {
        type: '[TODO] Add Todo',
        payload: todo

    }
    dispatch(action)

  }

  const handleDelete = (id) => {
     dispatch({
        type: '[TODO] Remove todo',
        payload: id
     })

  }
 
  const handleToggleTodo = (id) =>{
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
     })

  }

  return {
    init,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    pendigTodosCount: todos.filter(todo => !todo.done).length
  }
}
