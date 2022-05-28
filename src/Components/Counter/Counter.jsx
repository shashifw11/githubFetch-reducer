 import React , {useReducer} from "react" ; 

  const initState = {
      counter : 0 ,
      noOfClick : 0 ,  
  } 


   const counterActions = {
       increment : "increment" , 
       decrement : "decrement" , 
       reset : "reset"
   }

  const reducer = (state,action)=>{
      switch(action.type){
          case "increment" : {
               return {
                ...state , counter : state.counter + 1 , noOfClick : state.noOfClick +1
               }
                 
          }
           case "decrement" : {
            return {
                ...state , counter : state.counter - 1 , noOfClick : state.noOfClick +  1
               }
                 
           }
            case "reset" : 
              return {
                ...initState
            }
            default : return state ; 
      }
  }
export const Counter = ()=>{
    const [state , dispatch] = useReducer(reducer , initState) ; 
    return (
        <div>
            <h2>Count : {state.counter}</h2>
            <h2>No of Click : {state.noOfClick}</h2>
          
            <button  onClick = {()=>dispatch({type : counterActions.decrement})}>Sub</button>
            <button onClick = {()=>dispatch({type : counterActions.increment})}>Add</button>
            <button onClick = {()=>dispatch({type : counterActions.reset})}>Reset</button>
        </div>
    )
}