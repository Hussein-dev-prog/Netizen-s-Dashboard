import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const login = () => {
    if (email === '' && password === '') {
      toast.error('Please enter your email and password!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password
      }).then((response) =>
      {
        console.log(response);
        if (response.data.status === true) {
      
          toast.error(response.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else  {
          if (response.data.user.role === 'admin') {
            localStorage.setItem('token', response.data.token);
            loginNotify();
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (response.data.user.role === 'client') {
            localStorage.setItem('token', response.data.token);
            loginNotify();
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            notify();
          }
       
        } 
      }
      )
    }
  }

  const notify = () => toast.warning('You are not allowed to login as a student!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const loginNotify = () => toast.success('Login Successful!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div className="login-wrapper">

      <h1>Please Log In</h1>
        <label>
          <p>Email</p>
          <input type="text" onChange={handleEmail} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={handlePassword} />
        </label>
        <div>
          <button type="submit" onClick={login}>Submit</button>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}