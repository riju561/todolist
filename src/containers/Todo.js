import React from 'react';
import TodoList from '../components/TodoList/TodoList';
import TodoAdder from '../components/TodoAdder/TodoAdder';
import styles from './Todo.module.css';
const todo=()=>{
    return(
        <div className={styles.div}>
            <p className={styles.heading}>To-do List</p>
            <TodoAdder/>
            <TodoList/>
        </div>
    );
};
export default todo;