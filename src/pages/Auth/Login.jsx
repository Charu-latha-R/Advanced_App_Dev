import React from 'react';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-white to-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="form-input mt-1 block w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="form-input mt-1 block w-full" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
