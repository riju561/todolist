import React, { Component } from 'react';
import styles from './TodoList.module.css';
import {deleteTodo,completeTodo} from '../../store/actions/todo';
import { connect } from 'react-redux';
class TodoList extends Component{
    render(){
    // let style=styles.label;
    // abc?styles.label+" "+styles.completed:
    return(
        <div>
            <ul>
                {this.props.storedTodos.map(strTodo=>(
            <li key={strTodo.id}>
                <form className={styles.form}>
                {/* <input type="checkbox" onChange={()=>{this.props.onCompleteTodo(strTodo.id)}}/> */}
                <p className={styles.p}>{strTodo.value}</p>
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
        onCompleteTodo:(id)=>dispatch(completeTodo(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);