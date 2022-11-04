import React from 'react';

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div>
      <div className="card card-compact w-96  bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-[250px]" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="font-semibold text-xl text-orange-600 pb-4">
            Price: ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
