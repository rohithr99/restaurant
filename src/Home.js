import React ,{ useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardss from './Cardss';



function Home() {

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

  console.log(restaurantDetails);

  useEffect(() => {
    fetchDetails();
  },[]);

  return (
    <div>
       <Cardss data={restaurantDetails}></Cardss>
    </div>
  )
}

export default Home