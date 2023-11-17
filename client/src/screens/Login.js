import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { loginUser } from '../services/Auth';
import { useForm } from 'react-hook-form';

export default function Login() {
  const navigate = useNavigate();
  const mutation = useMutation(loginUser);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: response } = await mutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      localStorage.setItem('userEmail', data?.email);
      localStorage.setItem('token', response?.authToken);
      navigate('/');
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='form-container mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit(onSubmit)}>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: 'Email is required' })} aria-describedby="emailHelp" />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password', { required: 'Password is required' })} />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>
      </div>
    </div>
  );
}
