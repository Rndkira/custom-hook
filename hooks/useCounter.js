import { useState } from "react";


export const useCounter = (initialvalue = 1) => {
  
    const [counter, setCounter] = useState(initialvalue);

    const increment = (value = 1) =>{
        setCounter( counter + value)
    }

    const decrement = (value = 2) =>{

        if(counter === 1) return
        setCounter(counter - value)
    }
     
    const reset = () =>{
        setCounter(initialvalue)
    }

    return{
        counter,
        increment,
        decrement,
        reset,

    }
}
