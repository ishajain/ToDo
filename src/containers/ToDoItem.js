import React from 'react'
import { List , Button, Icon ,Input } from 'semantic-ui-react'
import {  deleteToDo, updateToDo } from '../actions'
import { connect } from 'react-redux'

class ToDoItem extends React.Component{
    
    deleteToDo = id => this.props.deleteToDo(id)

    updateToDo = todo => {
      
      this.props.updateToDo(todo.id,{...todo,isEditing:true})
    }


    render(){
        const {todo} = this.props
        return (
            <List.Item >
            <List.Content  floated="left"> 
              <Input transparent>{todo.title}</Input>
            </List.Content>
            <List.Content floated="right"> 
              <Button size="small" color="blue" onClick={() => this.updateToDo(todo)} >
                  <Icon name="edit"></Icon>
              </Button>
              <Button size="small" color="red" onClick={() => this.deleteToDo(todo.id)} >
                  <Icon name="delete"></Icon>
              </Button>
            </List.Content>
          </List.Item>
       
        )
    }
}

export default connect(null,{deleteToDo,updateToDo})(ToDoItem)
