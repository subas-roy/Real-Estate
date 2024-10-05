import { Helmet } from "react-helmet";
import Navbar from "../../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../shared/Footer/Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    signIn(email, password)
    .then(result => {
      console.log(result.user)

      // navigate after login
      navigate(location?.state ? location.state : '/')

      toast('User logged in successfully')
    })
    .catch(error => {
      console.error(error)
      setLoginError(error.message)
    })
    setLoginError('')
  }

  return (
    <div>
      <ToastContainer/>
      <Helmet>
        <title>Real Estate | Login</title>
      </Helmet>
      <Navbar/>
      <div className="bg-base-200">
        <div className="hero-content py-12 flex-col mx-auto">
          <h2 className="text-3xl">Login</h2>
          <div className="hero ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" required />
                  <span className="absolute top-[53px] right-3" onClick={() => setShowPassword(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>Don't have an account? Please <Link to={"/register"} className="btn btn-link font-bold">Register</Link></p>
                <p className="text-red-600">{loginError}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;