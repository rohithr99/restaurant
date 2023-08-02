import { FAIL,SUCCESS } from '../constants/restConstant';


//create reducer function
//                  //state , action
// second argument is to take action. action will be on that variable("here it is defined as action itself")
//to define state must use state=
export const restReducer = (state={restList:[]}, action) => {
    //here we have to check it with the type .
    //so when we type action.type ...the output of the action file's key type is called
    switch(action.type){
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return {
                restList: action.payload
            }
        default:
            return state
    }

}