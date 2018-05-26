const iniState = {
    uid:'',
    name:''
}
export default function user(state = iniState, action){
    switch(action.type){
        case 'SET_UID':
          return {...state, ...action.payload}
        default:
           return state 
    }
}