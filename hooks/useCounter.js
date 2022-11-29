import { useState } from "react";

   export const useCounter = (InitialValue=5) => {

    const [counter, setCounter] = useState(InitialValue);

    const increment = ( ) => {
        setCounter(counter + 1);
    }

    const decrement = ()=>{
        if(counter>=1){
            setCounter(counter - 1);
        }
        else{
           return;
        }
      
    }

    const reset = ()=>{
        setCounter(InitialValue);
    }


        return{
            counter,
            increment,
            decrement,
            reset,
        }
    }