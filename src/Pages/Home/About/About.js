import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero pt-10  pb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={person}
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="absolute right-10 top-2/3 w-3/5 border-8 rounded-lg  shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl py-5 text-orange-600 font-bold">About Us</p>
          <h1 className="text-5xl  py-5 font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            praesentium dolore soluta. Odio fugit, facere tempora quibusdam qui
            cupiditate inventore sed! Corporis nobis, labore quae cumque
            pariatur culpa? Facilis saepe omnis dolorum voluptatum natus ipsam,
            maxime alias voluptates fugit mollitia!
          </p>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            provident nisi, officia in deleniti nulla totam eius eaque
            blanditiis repellat dolore rem, similique hic nam harum ut ad aut!
            Dolore?
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
