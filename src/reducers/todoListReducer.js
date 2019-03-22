import { GetToDoList, GetToDo , AddToDo , UpdateToDo, DeleteTodo } from '../actions/types'
import _ from 'lodash'
export default (state = {},action) => {
    
    switch (action.type) {
        
      case GetToDoList:  return  {...state,..._.mapKeys(action.payload,"id")}
      case GetToDo: return {...state,[action.payload.id]:action.payload}
      case DeleteTodo: return  _.omit(state,action.payload)
      case UpdateToDo: return {...state,[action.payload.id]:action.payload}
      case AddToDo: return {...state,[action.payload.id]:action.payload}
      default: return state
    } 
}