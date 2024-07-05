import React from "react";

const SubscribeForm = () => {
  return (
    <form className="text-neutral-800 py-4 -ml-6 relative overflow-hidden flex flex-col justify-around w-full max-w-md border border-lavender-300 rounded-lg bg-lavender-50 p-3 px-4 sm:px-6">
      <div className="relative z-10 mb-4">
        <p className="text-lavender-600 text-sm sm:text-base mt-1">
          Sign up for our newsletter and be the first to know about new stories!
        </p>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row gap-2">
        <div className="relative rounded-lg flex-grow">
          <input
            type="email"
            className="relative bg-white ring-0 outline-none border border-lavender-300 text-lavender-800 placeholder-lavender-400 text-sm rounded-lg focus:ring-lavender-500 focus:border-lavender-500 block w-full p-2.5"
            placeholder="Your email..."
            required
          />
        </div>
        <button className="bg-lavender-600 text-white py-2 px-4 rounded-lg hover:bg-lavender-500 transition duration-300 text-sm sm:text-base w-full xl:w-auto">
          Subscribe
        </button>
      </div>
      <div className="absolute w-32 h-20 right-2 top-0 bg-lavender-200 -z-10 rounded-full blur-xl opacity-50"></div>
      <div className="absolute w-24 h-24 -right-6 -top-12 bg-lavender-300 -z-10 rounded-full blur-xl opacity-50"></div>
    </form>
  );
};

export default SubscribeForm;