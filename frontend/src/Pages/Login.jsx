import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // react-router-dom v6 navigation

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would normally validate credentials
    navigate('/'); // redirect to Home after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 font-sans">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-10 shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">StudySync</span>
        </div>

        {/* Header */}
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-400 mb-8">Enter your credentials to access your account.</p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 font-semibold">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 pr-10 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6 text-sm">
          <span className="text-gray-400">Don't have an account? </span>
          <a href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold">
            Sign Up
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
