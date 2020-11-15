import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState={
    todos:[]
}
const deleteTodo=(state,action)=>{
    const updatedArray=state.todos.filter(todo=>todo.id!==action.TdElId);
    return updateObject(state,{todos:updatedArray});
}
const completeTodo=(state,action)=>{
    return updateObject(state,{todos:state.todos.concat({id:new Date(),value:action.value,completed:!action.completed})});
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case(actionTypes.STORE_TODO):
        return updateObject(state,{todos:state.todos.concat({id:new Date(),value:action.value,completed:false})});
        case(actionTypes.DELETE_TODO):
        return deleteTodo(state,action);
        case(actionTypes.COMPLETE_TODO):
        return completeTodo(state,action);
    }
    return state;
}
export default reducer;