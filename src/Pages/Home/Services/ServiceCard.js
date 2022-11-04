import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div>
      <div className="card card-compact w-96 p-4 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-[250px] rounded-xl" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{title}</h2>

          <div className="flex ">
            <p className="font-semibold text-xl text-orange-600 ">
              Price: ${price}
            </p>
            <BsArrowRight
              size={24}
              className="font-bold text-xl text-orange-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
