import React from 'react';

const CarouselItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full " alt="" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4 text-white font-bold">
        <h1 className="text-6xl">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/2 text-white w-2/5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          assumenda excepturi id nam laboriosam accusamus minima quia aut.
          Recusandae, molestiae.
        </p>
      </div>

      <div className="absolute flex gap-5 transform -translate-y-1/2 left-24 top-3/4 text-white w-2/5">
        <button className="btn btn-outline btn-warning ">Discover More</button>
        <button className="btn btn-warning">Latest Projects</button>
      </div>
    </div>
  );
};

export default CarouselItem;
