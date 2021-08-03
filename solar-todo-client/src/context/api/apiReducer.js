import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, UPDATE_NOTE} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading:true}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes:payload, loading:false}),
    [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(note => note._id !== payload)}),
    [UPDATE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.map((curr)=>{if(curr._id === payload.id) curr.done = payload.flag ;return curr})}),
    DEFAULT: state => state
}

export  const  apiReducer = (state, action)=>{
    const handle = handlers[action.type]  ||  handlers.DEFAULT
    return handle(state, action);
}
