import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Event = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);

    const handelAddService =(e)=>{
        
        e.preventDefault()
        const name = e.target.name.value;
        const img = e.target.img.value;
        const service ={name,img}
        console.log(service);
        
        const url = 'https://ancient-brushlands-67397.herokuapp.com/service'
        console.log(url);

        fetch(url,{
            method:"POST",
            headers:{
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`, //get token from local sotreaget so that you can send data to backend
                'Content-type':'application/json',
            },
            body: JSON.stringify(service)   
        })
        .then(res => res.json())
        .then(data=>{
            alert(data.success)
        })

    }

    return (
        <div>
            <h3>this is event section</h3>
            <form onSubmit={handelAddService}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please Login</h3>
                    <div className="input-group">
                        <input type="text" name="name" id="" required placeholder='Enter your service name' />
                    </div>
                    <div className="input-group">
                        <input  name="img" id="" required placeholder='enter img url' />
                    </div>
                    <input className='from-submit bg-primary' type="submit" value="Add your service" />
                </div>


            </form>
        </div>
    );
};

export default Event;