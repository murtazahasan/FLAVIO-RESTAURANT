import React from "react";

function page() {
  return (
    <div className=" p-10 bg-slate-100">
  
      <div className="   ">
        <h1 className="text-5xl font-bold mb-6 text-center  text-green-600">
          About Flavio Restaurant
        </h1>
        <p className="text-lg text-center font-medium">
          Flavio is a modern gourmet restaurant – the concept is all about
          simple, fresh ingredients & light meals in a vibrant and minimalistic
          ambience. Step inside Flavio, and you’ll be greeted by an elegant,
          uncluttered space. The design whispers sophistication, with clean
          lines, muted tones, and carefully curated artwork. It’s a canvas where
          the food takes center stage.
        </p>
      </div>

      <section className="overflow-hidden p-8 mb-16  mt-16 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className=" sm:p-6 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl  sm:text-left">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl border-b-2 border-green-500 pb-2">
              OUR STORY
            </h2>

            <p className=" text-gray-700  text-lg  my-4 ">
              Flavio began in 2011 with our first branch in Clifton, expanding
              to Clifton E St and Tipu Sultan, now delivering to multiple
              locations in Pakistan. Launching Colette and Premo, the two
              sub-brand restaurants alongside venturing into event catering.
              With a passion for food and a commitment to serving Karachi’s joy,
              we’re ecstatic to serve our customers and look forward to
              continued growth. At Flavio, we believe that the magic lies in the
              raw materials. Our chefs meticulously source the freshest produce,
              handpicked from local markets and trusted suppliers. Each dish is
              a celebration of nature’s bounty.
            </p>
          </div>
        </div>

        <img
          src="about3.jpg"
          alt=""
          className="h-full w-full object-cover sm:h-[calc(100% - 2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100% - 4rem)] md:rounded-ss-[60px]  rounded-2xl"
        />
      </section>

      </div>
  );
}

export default page;
