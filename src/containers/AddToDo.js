import React from 'react'
import { Segment, Form, Button, Header , Message, Icon } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addToDo } from '../actions'
 

class AddToDo extends React.Component{
    
   
    onFormSubmit = (formValues) => {
       
       this.props.addToDo({...formValues,isEditing:false}); //By default editing is false
       this.props.reset()
       
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

    renderInput = ({input,placeholder,meta}) =>
    {
       
        return (
        <div>
            <input {...input} placeholder={placeholder} autoComplete="off" ></input>
            <div>
                <pre>{JSON.stringify(meta,0,2)}</pre>
            </div>
            {this.renderErrorMessage(meta)}
        </div>
       )
    }

    render(){
        return(
        <Segment >
                <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} >
                <Header  size='large'>ToDo App:</Header>
                    <Field  placeholder="Add a todo task here..." name="title" component={this.renderInput}></Field>
                    <Button  type='submit' color="green"><Icon name="add"></Icon></Button>
                </Form>
        </Segment>
            )
    }

}

const validate = formValues => {
    
    const errors= {}

    if(!formValues.title){
        errors.title = "You must enter the valid todo."
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'ADD_TODO_FORM',
    validate
})(AddToDo);

export default connect(null,{addToDo})(formWrapped)