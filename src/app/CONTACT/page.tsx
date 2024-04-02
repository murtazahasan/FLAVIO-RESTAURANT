import React from "react";

const page = () => {
  return (
    <div className="  pb-8 pt-2   bg-white">
      <div className="max-w-lg mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold mb-6 text-center  border-b-2 pb-2">Contact Us</h2>
        <form>
          <div className="space-y-4 ">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="block mb-1">
                Contact
              </label>
              <input
                id="contact"
                type="text"
                className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full mt-4 py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="container mx-auto p-8">
        <div className="text-4xl  border-b-2 pb-2 font-bold text-center mb-8">Our Locations</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-b p-3  bg-gray-100">
            <div className="text-lg p-1 font-bold">Head Office</div>
            <div className="p-2">
              <span>
                <img src="phone.png" alt="" className="inline-block w-6 mr-2" />
              </span>
              (021) 3587-1976
            </div>
            <div className="p-1">
              <span>
                <img
                  src="location.png"
                  alt=""
                  className="inline-block w-6 mr-2"
                />
              </span>
              Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton
              Road, Karachi, Pakistan
            </div>
          </div>
          <div className="border-b p-3  bg-gray-100">
            <div className="text-lg p-1 font-bold">Regional Office Karachi</div>
            <div className="p-2">
              <span>
                <img src="phone.png" alt="" className="inline-block w-6 mr-2" />
              </span>
              (021) 3587-2986
            </div>
            <div className="p-1">
              <span>
                <img
                  src="location.png"
                  alt=""
                  className="inline-block w-6 mr-2"
                />
              </span>
              Blue wales tower, 1st Floor, G-1, Block -2, Scheme 2, Main sadar
              Road, Karachi, Pakistan
            </div>
          </div>
          <div className="border-b p-3  bg-gray-100">
            <div className="text-lg p-1 font-bold">Regional Office Islamabad</div>
            <div className="p-2">
              <span>
                <img src="phone.png" alt="" className="inline-block w-6 mr-2" />
              </span>
              (021) 3587-3996
            </div>
            <div className="p-1">
              <span>
                <img
                  src="location.png"
                  alt=""
                  className="inline-block w-6 mr-2"
                />
              </span>
              United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad,
              Pakistan
            </div>
          </div>
          <div className="border-b p-3  bg-gray-100">
            <div className="text-lg p-1 font-bold">
Regional Office Lahore</div>
            <div className="p-2">
              <span>
                <img src="phone.png" alt="" className="inline-block w-6 mr-2" />
              </span>
              (021) 3587-4996
            </div>
            <div className="p-1">
              <span>
                <img
                  src="location.png"
                  alt=""
                  className="inline-block w-6 mr-2"
                />
              </span>
              27-A Ali Block New Garden Town Opposite Barkat Market, Lahore,
              Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
