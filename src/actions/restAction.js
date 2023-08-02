import axios from "axios";
import { SUCCESS, FAIL } from "../constants/restConstant";

//logic to update store data
//api call -- dispatchable function

export const getRestaurants = async (dispatch) => {


    //to avoid runtime errors in javascript we use try catch

    try {

        //destructuring --  { data }
        const { data } = await axios.get('/restaurants.json');
        console.log(data.restaurants);

        //dispatch the expected output payload to reducer
        dispatch(
            {
                payload: data.restaurants,
                type: SUCCESS
            }
        )

    }
    catch (err) {
        dispatch(
            {
                payload: err,
                type: FAIL
            }
        )
    }
}


