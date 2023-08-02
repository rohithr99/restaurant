import React ,{ useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardss from './Cardss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from './actions/restAction';
import { restReducer } from './reducers/reducer';


//useSelector hook is used by a component to access data from store
//and for updating useDispatch


function Home() {

  const dispatch = useDispatch();

  //state to hold the datas
  // const [restaurantDetails,setRestaurants] = useState([]);

  //api to get all details of restaurant from restaurant.json

  // const fetchDetails = async() => {
  //   var result = await fetch('/restaurants.json');
    //we can only store once. if we need again then we have to use .then

    //convert to js 
    // result.json().then(data => {
    //     setRestaurants(data.restaurants);
    // })

  // }

  // console.log(restaurantDetails);

  useEffect(() => {
    // fetchDetails();
    dispatch(getRestaurants);
  },[]);

  const restaurants = useSelector(state => state.restReducer.restList)

  return (
    <div>
      {
    <Container>
      <Row>
        {
      restaurants.map(i => 

            <Col sm={12} md={4}>
              <Link to={`view/${i.id}`} style={{ textDecoration: "none" }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={i.photograph} />
                  <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    <Card.Text>
                      {i.address}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

          )
        }
      </Row>
    </Container>
      }
      
    </div>
  )
}

export default Home