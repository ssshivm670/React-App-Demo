/**
 * REDUCERS
 */

export default (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {counter:Number(state.counter) + 1};
        case 'DECREMENT':
            return {counter:Number(state.counter) - 1};
        default:
            return  {counter:0};
    }
}