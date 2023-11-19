import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser } from "../../services/Auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./type";
import { errorToast, successToast } from "../../lib/Toast";
import { ErrorMessage } from "../../Enum/ErrorMessage";
import { Helmet } from "react-helmet";
const Login = () => {
  const navigate = useNavigate();
  const mutation = useMutation(loginUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (data) => {
    try {
      const response = await mutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("userEmail", data?.email);
      localStorage.setItem("token", response?.authToken);
      localStorage.setItem("role", response?.role);
        successToast(ErrorMessage.LOGIN_SUCCESS);
        navigate("/");
      
    } catch (error) {
      errorToast(ErrorMessage.LOGIN_ERROR);
    }
  };


  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Helmet>
        <title>Ebuy | Login</title>
      </Helmet>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form
          className="form-container mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="m-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email")}
              aria-describedby="emailHelp"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password")}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
