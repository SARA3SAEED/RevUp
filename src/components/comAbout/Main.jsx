import React from "react";

export default function Main() {
  return (
    <>
      <section className="bg-gray-100 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                We seek to be the largest authorized car distributor in the
                Kingdom for more than one popular brand to develop its car
                fleet, in addition to hundreds of thousands of customers. We
                seek to create added value in the car selling sector and to be a
                purchasing advisor to customers, as we seek To build their
                confidence and provide after-sales services in a new way and a
                modern and advanced vision with the aim of building a
                sustainable relationship with the customer, relying in this on
                an experienced work team whose primary mission is to overcome
                obstacles and provide everything necessary to serve our
                customers.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                src="https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
