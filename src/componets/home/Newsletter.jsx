import React from "react";

const Newsletter = () => {
  return (
    <div
      data-aos="fade-up"
      className="my-12 py-7 bg-secondary text-gray-800 text-center"
    >
      <div className="flex flex-wrap justify-center">
        <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
          <div className="p-4 bg-primary rounded-full shadow-lg inline-block mb-6">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-5 h-5 text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6">Want the latest offers ?</h2>
          <p className="text-gray-500 mb-12">Subscribe to the newsletter</p>
          <div className="md:flex flex-row">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
