import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { config } from '../Config';
import { useMutation } from 'react-query';
import { signUpUser } from '../services/Auth';
import axios from 'axios';
 const  Signup =()=> {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
  const [address, setAddress] = useState("");
  const navigate = useNavigate()
  const mutation = useMutation(signUpUser);
  const handleClick = async (e) => {
    e.preventDefault();
    const navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    const latlong = await navLocation().then(res => {
      const latitude = res.coords.latitude;
      const longitude = res.coords.longitude;
      return [latitude, longitude]
    })
    // console.log(latlong)
    const [lat, long] = latlong
    const { data: { location } } = await axios.post(`${config.Port}/api/auth/getlocation`, {
      latlong: { lat, long },
    });
    setAddress(location);
    setCredentials({ ...credentials, [e.target.name]: location })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await mutation.mutateAsync(credentials);
        localStorage.setItem('token', data?.authToken);
        navigate('/login');
    } catch (error) {
      console.error('An error occurred during user submission:', error);
      // Handle error as needed
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
      <div>
        <Navbar />
      </div>

      <div className='container' >
        <form className='form-container  mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="address" className="form-label">Address</label>
            <fieldset>
              <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" />
            </fieldset>
          </div>
          <div className="m-3">
            <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  )
}
export default Signup