import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;

    // if (phone.length !== 11) {
    //   toast.warn('Phone number should be 11 characters');
    //   return;
    // }

    const order = {
      serviceId: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Orders placed successfully');
          // form.reset();
          console.log(data);
        }
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
  };

  return (
    <div className="py-10">
      <h2 className="text-4xl">You are about to order: {title}</h2>
      <h4 className="text-3xl py-4">Price:{price}</h4>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full h-24 mt-4"
          placeholder="Your Message"
        ></textarea>

        <Link to="/orders">
          <input
            className="btn btn-outline btn-dark mt-4"
            type="submit"
            value="Place Your Order"
          />
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
