import { FAIL,SUCCESS } from '../constants/restConstant';


//create reducer function
//                  //state , action
// second argument is to take action. action will come to that variable
export const restReducer = (state = {restList: []}, action) => {
    switch(action.type){
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return {
                restList: action.payload
            }
    }

}