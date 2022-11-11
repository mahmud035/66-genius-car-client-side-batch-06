import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?order=${isAscending ? 'asc' : 'desc'}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAscending]);

  // console.log(services);
  return (
    <div className="pt-10 pb-24">
      <div className="text-center">
        <p className="text-2xl py-4 font-bold text-orange-600">Services</p>
        <h2 className="text-5xl  font-bold"> Our Service Area</h2>
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt
          distinctio minus sit magnam numquam tempora esse. <br /> Porro
          dignissimos cum nemo id voluptas,
        </p>

        <button
          onClick={() => setIsAscending(!isAscending)}
          className="btn btn-accent"
        >
          {isAscending ? 'Descending' : 'Ascending'}
        </button>
        {/* <input
          ref={searchRef}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs mb-4 mr-10"
        />
        <button onClick={handleSearch} className="btn btn-info mr-16">
          Search
        </button>
        <button
          onClick={() => setIsAscending(!isAscending)}
          className="btn btn-accent "
        >
          {isAscending ? 'descending' : 'ascending'}
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>

      <div className="w-fit mx-auto mt-16">
        <button className="btn btn-outline text-orange-600 ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
