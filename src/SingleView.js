import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleView() {

    const [allResDetail, setRes] = useState([]);
  
  const params = useParams();
  const getDetails = async(uid) => {
    const result = await fetch(`/restaurants.json`);
    result.json().then(data => {
        setRes(data.restaurants);
        console.log(data);
    })
  }
//   console.log(allResDetail);

  useEffect(() => {
    getDetails()
    // console.log(params.id);
  })

  const singleDetail = allResDetail.find(i => i.id == params.id);
  console.log(singleDetail);
    return (
        <div>
                    <div className="text-center">
            {
                singleDetail ? 
                <div>
                    <h1>{singleDetail.username}</h1>
                    <div>
                    <img src={singleDetail.photograph} alt="" width="400" />
                    </div>
                    <h6 className="mt-2">Mobile: {singleDetail.mobile}</h6>
                    <p>Address: {singleDetail.address}</p>
                    <ul>
                        <li>Place : {singleDetail.place}</li>
                        <li>E-mail : {singleDetail.email}</li>
                    </ul>
                </div>
                : <h1>No Contact Found</h1>
            }

        </div>

        </div>
  )
}

export default SingleView