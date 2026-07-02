import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      if (isRegister) {
        // Register API Call
        const { data } = await axios.post('/api/users/register', { name, email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
      } else {
        // Login API Call
        const { data } = await axios.post('/api/users/login', { email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
      }
      
      // Navigate to homepage or dashboard after successful auth
      navigate('/');
    } catch (err) {
      setError(err.response && err.response.data.message 
        ? err.response.data.message 
        : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] py-16 px-4 flex items-center justify-center bg-ivory font-body">
      <div className="w-full max-w-[450px] mx-auto bg-white p-10 md:p-12 rounded-[20px] shadow-[0_10px_40px_rgba(58,20,32,0.05)] text-center">
        <h2 className="font-display italic font-semibold text-3xl md:text-4xl mb-2 text-maroon">
          {isRegister ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-500 mb-6 font-light">
          {isRegister ? 'Sign up to shop the latest ethnic wear.' : 'Login to access your account & orders.'}
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-md text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="text-left">
          {isRegister && (
            <div className="mb-5">
              <label className="block mb-2 font-medium text-charcoal">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                placeholder="John Doe" 
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-soft transition-shadow"
              />
            </div>
          )}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-charcoal">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="you@example.com" 
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-soft transition-shadow"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium text-charcoal">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••" 
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-soft transition-shadow"
            />
          </div>
          
          {!isRegister && (
            <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-rose-deep" /> Remember me
              </label>
              <a href="#" className="text-rose-deep hover:text-gold transition-colors underline">
                Forgot Password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-rose-deep text-white py-3.5 rounded-md font-medium tracking-[2px] uppercase text-sm hover:bg-gold hover:text-maroon transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : (isRegister ? 'Sign Up' : 'Login')}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-gray-500">
          <p>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <button 
              onClick={() => setIsRegister(!isRegister)} 
              className="ml-2 font-semibold text-rose-deep hover:text-gold transition-colors"
            >
              {isRegister ? 'Login Here' : 'Register Now'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
