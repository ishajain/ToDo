import React from 'react'
import { connect } from 'react-redux'
import { Segment,List } from 'semantic-ui-react'
import _ from 'lodash'
import {  getToDoList } from '../actions'
import ToDoItem from './ToDoItem'
import EditToDo from './EditToDo'

class ToDoList extends React.Component{

   
    
    renderListItem = todo => 
    {
        return todo.isEditing === false ? <ToDoItem todo={todo} key={todo.id} /> : <EditToDo todo={todo} key={todo.id}/>
           
    }

    render(){
        
        return this.props.todoList.length === 0 ? <Segment>No todo's added yet, start adding now...</Segment> :
        <Segment>
            <List divided relaxed>
                {this.props.todoList.map(todo => this.renderListItem(todo))}
            </List>
        </Segment>
        
    }

    componentDidMount (){
        this.props.getToDoList()
    }

}

const mapStateToProps = (state) => {
    return {
        todoList: Object.values(state.todoList) //convert object and returns an array
    }
}

export default connect(mapStateToProps,{getToDoList})(ToDoList)