 export const todoReducer = (initalState = [], action) => {

  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initalState, action.payload]; //action.payload sirve para agregar un nuevo todo
    case "[TODO] Delete Todo":
      return initalState.filter((todo) => todo.id !== action.payload); //action.payload sirve para eliminar un todo
    case "[TODO] Eddit Todo": 
        return initalState.map(
            todo =>(todo.id === action.payload.id) 
            ? action.payload : todo
        )
      case "[TODO] Toggle Todo":
        return initalState.map(todo =>{
          if(todo.id=== action.payload){
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo;
        })


    default:
      return initalState;
  }
};

