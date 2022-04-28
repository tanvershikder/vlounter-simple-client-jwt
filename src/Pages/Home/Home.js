import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Home = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://ancient-brushlands-67397.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    
    return (
        <div>
            <h1>this is home page : {}</h1>
            <div className='row'>
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Home;