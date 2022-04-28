import React from 'react';

const ServiceCart = ({ service }) => {
    return (
        <div className='col-md-4 mb-5'>
            <div className="card" style={{width: "18rem"}}>
                <img src={service.img} className="card-img-top" alt="..."/>
                    <div className="card-body bg-primary">
                        <h5 className="card-title mb-0 mt-0">{service.name}</h5>
                    </div>
            </div>
        </div>
    );
};

export default ServiceCart;