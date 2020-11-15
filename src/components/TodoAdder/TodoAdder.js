import React, { Component} from 'react';
import styles from './TodoAdder.module.css';
import { storeTodo } from '../../store/actions/todo';
import { connect } from 'react-redux';
class Todoadder extends Component{
    constructor(props) {
        super(props);
        this.todoRef = React.createRef();
    }
    render(){
    const handleSubmit = e => {
        if(this.todoRef.current.value===""){
            e.preventDefault();
            alert("Task cannot be empty");
        }
        else{
        e.preventDefault();
        const todos = this.todoRef.current.value;
        console.log(todos);
        this.props.onStoreTodo(todos);
        this.todoRef.current.value="";
    }
    }
   return(
       <div>
           <form className={styles.form}>
               <input className={styles.input} ref={this.todoRef} placeholder="Add task"></input>
               <button onClick={handleSubmit} 
               className={styles.button}>ADD</button>
           </form>
       </div>
   );
}
};
const mapStateToProps = state => {
    return {
        storedTodos: state.todos,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onStoreTodo:(td)=>dispatch(storeTodo(td))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todoadder);