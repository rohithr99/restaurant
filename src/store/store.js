import { restReducer } from "../reducers/reducer";


const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const reducers = combineReducers({
    restReducer
});
//a method to combine all reducers in reducers


//middleware
//normally redux is synchronous . but during api calls it is asynchronous.so to 
// convert synchronous redux to asynchronous redux we are using middleware

//create a middleware
const middleware = [thunk];


//create store
const restStore = createStore(reducers,applyMiddleware(...middleware));
//spread operator is used to add all the middlewares to the variable. here it is only one middleware.


//export
export default restStore;