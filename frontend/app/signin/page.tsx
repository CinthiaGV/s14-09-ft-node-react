'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });

      if (result.error) {
        console.log('result error componente signin', result);
        setError(result.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', {
      callbackUrl: '/',
      // callbackUrl: '/main',    si quisiera reedirigir cambio esto
    });
  };

  const handleFacebookSignIn = async () => {
    await signIn('facebook', {
      callbackUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-gray-300 rounded-lg shadow-md w-72 md:w-[550px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign In
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="jsmith@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            <div
              className="h-6 mr-2 text-center rounded-full"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <svg
                className="icon icon-google-24 social-buttons__item-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path
                  d="M7.04594 13.669L6.489 15.7481L4.45341 15.7912C3.84506 14.6628 3.5 13.3719 3.5 12C3.5 10.6734 3.82263 9.42239 4.3945 8.32086H4.39494L6.20719 8.65311L7.00106 10.4545C6.83491 10.9389 6.74434 11.4589 6.74434 12C6.74441 12.5872 6.85078 13.1499 7.04594 13.669Z"
                  fill="#FBBB00"
                ></path>
                <path
                  d="M19.3601 10.5055C19.452 10.9894 19.4999 11.4892 19.4999 12C19.4999 12.5727 19.4397 13.1314 19.325 13.6703C18.9355 15.5042 17.9179 17.1055 16.5083 18.2387L16.5078 18.2382L14.2252 18.1218L13.9022 16.1051C14.8375 15.5565 15.5685 14.698 15.9536 13.6703H11.6758V10.5055H16.016H19.3601Z"
                  fill="#518EF8"
                ></path>
                <path
                  d="M16.5079 18.2382L16.5083 18.2387C15.1373 19.3406 13.3958 20 11.5 20C8.45337 20 5.80459 18.2971 4.45337 15.7912L7.0459 13.669C7.72149 15.4721 9.46084 16.7556 11.5 16.7556C12.3764 16.7556 13.1976 16.5187 13.9021 16.105L16.5079 18.2382Z"
                  fill="#28B446"
                ></path>
                <path
                  d="M16.6064 5.84175L14.0148 7.9635C13.2855 7.50769 12.4235 7.24437 11.5 7.24437C9.41475 7.24437 7.64288 8.58678 7.00113 10.4545L4.39497 8.32088H4.39453C5.72597 5.75384 8.40816 4 11.5 4C13.4411 4 15.2209 4.69144 16.6064 5.84175Z"
                  fill="#F14336"
                ></path>
              </svg>
            </div>
            {/* <img src="/googleLogo.svg" alt="Google Logo" className="h-4 mr-2" /> */}
            Sign In with Google
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center bg-blue-700 text-white py-2 px-4 rounded-md w-full hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
          >
            <div
              className="h-6 mr-2 text-center rounded-full"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <svg
                className="icon icon-facebook-24 social-buttons__item-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path
                  d="M12 3.89099C16.476 3.89099 20.1036 7.5186 20.1036 11.9945C20.1036 16.04 17.1407 19.3922 13.2662 20V14.337H15.1544L15.5137 11.9945H13.2662V10.4751C13.2662 9.83413 13.5796 9.20895 14.5862 9.20895H15.6087V7.21472C15.6087 7.21472 14.6812 7.05644 13.7949 7.05644C11.9431 7.05644 10.7339 8.1786 10.7339 10.2092V11.9945H8.67632V14.337H10.7339V20C6.85935 19.3922 3.89648 16.04 3.89648 11.9945C3.89648 7.5186 7.52409 3.89099 12 3.89099Z"
                  fill="#1877F2"
                ></path>
              </svg>
            </div>
            {/* <img
              src="/facebook-logo.svg"
              alt="Facebook Logo"
              className="h-4 mr-2"
            /> */}
            Sign In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
