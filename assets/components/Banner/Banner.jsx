import React from "react";
import bannerImg from "../../images/bannerImg.jpg";

const Banner = () => {
  return (
    <section className="bg-amber-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-brown-900">
            Sourced directly from Kenyan Farms ☕
          </h1>
          <p className="text-lg text-gray-700">
            Your daily dose of freshly brewed coffee and inspiration.
            Experience our handcrafted blends and relax with every sip.
          </p>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={bannerImg}
            alt="Coffee Banner"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        </div> 
      </div>
    </section>
  );
};

export default Banner;
