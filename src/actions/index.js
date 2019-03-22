import { GetToDoList,AddToDo, GetToDo , UpdateToDo, DeleteTodo } from './types'
import jsonplaceholder from '../api/jsonplaceholder'

// GET all ToDo lists
export const getToDoList = () => async dispatch => 
{
       const response = await jsonplaceholder.get('/todos')
       dispatch({
                    type: GetToDoList,
                    payload: response.data
                })
}

// GET ToDo item
export const getToDo = id => async dispatch => 
{
       const response = await jsonplaceholder.get('/todos',id)
       dispatch({
                    type: GetToDo,
                    payload: response.data
                })
}

// Post todo item
export const addToDo = todo => async dispatch =>
{
   
    const response = await jsonplaceholder.post('/todos',todo)
    dispatch({ 
               type: AddToDo, 
               payload:response.data
            })
}

// Put todo item
export const updateToDo = (id,updatedToDo) => async dispatch =>
{
    
    const response = await jsonplaceholder.put(`/todos/${id}`,updatedToDo)
    dispatch({ 
               type: UpdateToDo, 
               payload:response.data
            })
}

// Delete todo item
export const deleteToDo = id => async dispatch =>
{
    
    await jsonplaceholder.delete(`/todos/${id}`)
    dispatch({ 
        type: DeleteTodo, 
        payload: id
     })
    
}
    




