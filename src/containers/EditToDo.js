import React from 'react'
import { List , Button, Icon ,Form, Message } from 'semantic-ui-react'
import {  updateToDo } from '../actions'
import { connect } from 'react-redux'
import { Field, reduxForm,change } from 'redux-form'
class EditToDo extends React.Component{
    
    onCancelEditing = (event,todo) =>
    {
      event.preventDefault();
      this.props.updateToDo(todo.id,{...todo,isEditing:false})
    }

    

    onInputChange = (event) =>{
        this.props.change('title', event.target.value);
    }

    
    onFormSubmit = formValues => {
       
        const {todo} = this.props
        
        this.props.updateToDo(todo.id,{...todo,title:formValues.title,isEditing:false})
      }

 
    renderErrorMessage = ({error, touched}) => {
         if(error && touched){
             return(
                <Message negative>
                     <Message.Header>{error}</Message.Header>
                </Message> 
             )
         }
     }
    

    renderInput = ({input,meta,todo}) =>
    {
        
        return (
        <div>
            <input {...input}  autoComplete="off" onChange={this.onInputChange}></input>
             {this.renderErrorMessage(meta)}
        </div>
       )
    }

    render(){
        const {todo} = this.props
        
        return (
            <List.Item>
              <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <List.Content  floated="left"> 
                <Field name="title"  component={this.renderInput} ></Field>
                </List.Content>
                <List.Content floated="right"> 
                <Button size="small" color="green" type='submit'>
                    <Icon name="check"></Icon>
                </Button>
                <Button size="small" color="red" onClick={(event) => this.onCancelEditing(event,todo)}>
                    <Icon name="cancel"></Icon>
                </Button>
                </List.Content>
              </Form>   
            
          </List.Item>
       
        )
    }
}

const validate = formValues => {
    
    const errors= {}

    if(!formValues.title ){
        errors.title = "You must enter the valid todo."
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'EDIT_TODO_FORM',
    validate,
    enableReinitialize: false,
    
})(EditToDo);

export default connect((state,ownProps) => ({ 
  
    initialValues: {
      title: ownProps.todo.title
    } 
  }),{updateToDo})(formWrapped)
