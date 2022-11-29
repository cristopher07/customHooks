import React, { useEffect, useReducer } from 'react'
import { todoReducer } from "../08-useReducer/TodoReducer";
import initalState from "../08-useReducer/Info";

export const useTodo = () => {

    const init = () => {  
        return JSON.parse(localStorage.getItem("todos")) || [];
      };
    
      const info = initalState;
      const [todos, dispatch] = useReducer(todoReducer, info, init);
    
      useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
      
      const handleNewTodo = (todo)=>{
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        }
        dispatch(action); //dispatch sirve para disparar una acción
      };
    
      const handleDeleteTodo = (id)=>{
        const action = {
          type: "[TODO] Delete Todo",
          payload: id,
        }
        dispatch(action); 
      };
    
      const handleEditTodo = (id)=>{
        const action = {
          type: "[TODO] Eddit Todo",
          payload: id,
        }
        dispatch(action); 
      };
    
      const handleToggleTodo = (id) => {
          dispatch({
            type: "[TODO] Toggle Todo",
            payload: id
          });
      };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleToggleTodo,   
    ...todos,
  }
}
