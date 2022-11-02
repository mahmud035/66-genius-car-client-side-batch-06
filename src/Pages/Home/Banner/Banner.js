import React from 'react';
import img4 from '../../../assets/images/banner/4.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img4} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
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
            <button className="btn btn-outline btn-warning ">
              Discover More
            </button>
            <button className="btn btn-warning">Latest Projects</button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0 ">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0 ">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
