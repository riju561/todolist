import * as actionTypes from './actionTypes';
export const storeTodo=(td)=>{
    return{
        type:actionTypes.STORE_TODO,
        value:td
    }
}
export const deleteTodo=(id)=>{
    return{
        type:actionTypes.DELETE_TODO,
        TdElId:id
    }
}
export const complete = (id,value) => {
    return {
        type: actionTypes.COMPLETE_TODO,
        TdElId: id,
        value: value
    }
}
export const completeTodo=(id,value)=>{
    return function(dispatch){
        dispatch(complete(id,value));
        dispatch(deleteTodo(id));
    }
}
