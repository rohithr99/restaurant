import React ,{ useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardss from './Cardss';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from './actions/restAction';

//useSelector hook is used by a component to access data from store
//and for updating useDispatch


function Home() {

  const dispatch = useDispatch();

  //state to hold the datas
  const [restaurantDetails,setRestaurants] = useState([]);

  //api to get all details of restaurant from restaurant.json

  const fetchDetails = async() => {
    var result = await fetch('/restaurants.json');
    //we can only store once. if we need again then we have to use .then

    //convert to js 
    result.json().then(data => {
        setRestaurants(data.restaurants);
    })

  }

  // console.log(restaurantDetails);

  useEffect(() => {
    fetchDetails();
    dispatch(getRestaurants);
  },[]);

  const restaurants = useSelector(state => state.restReducer.restList)

  return (
    <div>
      {
      restaurants.map(i => {
        <div>
       <Cardss data={restaurants}></Cardss>
        </div>
      })
      }
    </div>
  )
}

export default Home