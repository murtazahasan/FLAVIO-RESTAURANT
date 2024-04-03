import React from 'react'

function page() {
  return (
    <div className="min-h-screen px-2 flex items-center justify-center bg-gray-100">
    <div className="bg-white p-5  rounded-lg shadow-md w-96">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="username">Username</label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-green-500"
            type="text"
            id="username"
            placeholder="Enter your username"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="email">Email</label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-green-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="password">Password</label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-green-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
        </div>
        <button
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded w-full text-sm hover:bg-green-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default page