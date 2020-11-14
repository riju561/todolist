import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState={
    todos:[]
}
const deleteResult=(state,action)=>{
    const updatedArray=state.todos.filter(todo=>todo.id!==action.TdElId);
    return updateObject(state,{todos:updatedArray});
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case(actionTypes.STORE_TODO):
        return updateObject(state,{todos:state.todos.concat({id:new Date(),value:action.value,completed:false})});
        case(actionTypes.DELETE_TODO):
        return deleteResult(state,action);
        case(actionTypes.COMPLETE_TODO):
        return {
            todos:{
            ...state,
            completed:true
        }
        }
    }
    return state;
}
export default reducer;