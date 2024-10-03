import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    if (password < 6) {
      setRegisterError('Password should be at least 6 characters.')
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should have an uppercase character!')
      return;
    }
    else if (!/[a-z]/.test(password)) {
      setRegisterError('Your password should have an lowercase character!')
      return;
    }

    // reset error
    setRegisterError('')

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        toast('User created successfully!')
      })
      .catch(error => {
        console.error(error)
        setRegisterError(error.message)
      })
  }

  return (
    <div>
      <ToastContainer/>
      <Helmet>
        <title>Real Estate | Register</title>
      </Helmet>
      <Navbar />
      <div className="hero bg-base-200 py-12">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" name="photo" placeholder="Photo" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have an account? Please <Link to={"/login"} className="btn btn-link font-bold">Login</Link></p>
            <p className="text-red-600">{registerError}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;