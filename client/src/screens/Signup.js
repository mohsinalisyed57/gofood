import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { config } from '../Config';
import { useMutation } from 'react-query';
import { signUpUser } from '../services/Auth';
import axios from 'axios';
import { useForm} from 'react-hook-form';

const Signup = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const mutation = useMutation(signUpUser);
  const {handleSubmit, setValue, register, formState: { errors } } = useForm();

  const handleClick = async () => {
    try {
      const position = await new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
      const { latitude, longitude } = position.coords;

      const { data: { location } } = await axios.post(`${config.Port}/api/auth/getlocation`, {
        latlong: { lat: latitude, long: longitude },
      });

      setAddress(location);
      setValue('address', location);
    } catch (error) {
      console.error('An error occurred during fetching location:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const { data: response } = await mutation.mutateAsync(data);
      localStorage.setItem('token', response?.authToken);
      navigate('/login');
    } catch (error) {
      console.error('An error occurred during user submission:', error);
      // Handle error as needed
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
      <div>
        <Navbar />
      </div>

      <div className='container'>
        <form className='form-container mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit(onSubmit)}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name', { required: 'Name is required' })} />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: 'Email is required' })} />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="m-3">
            <label htmlFor="address" className="form-label">Address</label>
            <fieldset>
              <input type="text" className={`form-control ${errors.address ? 'is-invalid' : ''}`} {...register('address', { required: 'Address is required' })} placeholder='Click below for fetching address' value={address} onChange={(e) => setAddress(e.target.value)} />
              {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
            </fieldset>
          </div>
          <div className="m-3">
            <button type="button" onClick={handleClick} name="geolocation" className="btn btn-success">Click for current Location</button>
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password', { required: 'Password is required' })} />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
