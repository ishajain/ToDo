import { combineReducers } from 'redux'
import { reducer as todoFormReducer} from 'redux-form'

import todoListReducer from './todoListReducer'

export default combineReducers({
    todoList : todoListReducer,
    form: todoFormReducer
})