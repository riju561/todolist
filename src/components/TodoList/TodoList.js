import React, { Component } from 'react';
import styles from './TodoList.module.css';
import {deleteTodo,completeTodo} from '../../store/actions/todo';
import { connect } from 'react-redux';
class TodoList extends Component{
    render(){
    return(
        <div>
            <ul>
                {this.props.storedTodos.map(strTodo=>(
            <li key={strTodo.id}>
                <form className={strTodo.completed ? styles.form + " " + styles.completed : styles.form}>
                <p className={strTodo.completed?styles.p+" "+styles.completed:styles.p} 
                onClick={()=>this.props.onCompleteTodo(strTodo.id,strTodo.value)}>{strTodo.value}</p>
                </form>
                <button className={styles.button} 
                onClick={()=>this.props.onDeleteTodo(strTodo.id)}>X</button>
                </li>
                ))}
            </ul>
        </div>
    );
}
}
const mapStateToProps=state=>{
    return{
        storedTodos:state.todos,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onDeleteTodo:(id)=>dispatch(deleteTodo(id)),
        onCompleteTodo:(id,value)=>dispatch(completeTodo(id,value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);