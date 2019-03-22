import React from 'react'
import { Container } from 'semantic-ui-react'
import { hot } from 'react-hot-loader/root';
import ToDoList from '../containers/ToDoList'
import AddToDo from '../containers/AddToDo'
class App extends React.Component{
    render(){
        return (
        <Container>
            <AddToDo />
            <ToDoList />
        </Container>
        )
    }
}

export default hot(App);